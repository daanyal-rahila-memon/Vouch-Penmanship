const crypto = require("crypto");
const uuidv4 = require("uuid/v4");
const mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 20,
    trim: true
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true
  },
  batch: {
    type: Number,
    required: true,
    maxlength: 2,
    trim: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  encryPassword: {
    type: String,
    required: true,
  },
  salt: String,         // is a random string (collection of alpha-numerics) added to the password to make it stronger
  walletAddress: {
    type: String,
    unique: true,
    trim: true,
  }
}, {timestamps: true}    // Timestamp will save the exact time in Database when any Student will be created.
);

// Create a virtual property `roll_number` that's computed from `email`.
studentSchema.virtual('roll_number')
  .get(function() 
    {
      return this.email.slice(this.email, this.email.indexOf('@'));
    });

// Create a virtual property `password` to secure it using hash & then store it in our database -> encryPassword.
studentSchema.virtual("password")
  .set(function(password)
        {
          this._password = password;
          this.salt = uuidv4();     // this is how to populate the salt
          this.encryPassword = this.securePassword(password);
        })
  .get(function()
        {
          return this._password;
        })

// Definitions of the methods in this schema
studentSchema.methods = {

  // authentication method for authentication of the password
  authenticate: function(plainPassword)
  {
    return this.securePassword(plainPassword) === this.encryPassword;
  },

  // Securing password using hash & salt
  securePassword: function (plainPassword) 
  {
    if (!plainPassword) 
    {
      return "";
    }
    try {
      return crypto.createHmac("sha256", this.salt)    // CreateHmac(algorithm, key) -- createHmac is used to create Hash object
                                                // Encryption Algorithm is 'sha256' over here
                                                // Key is the salt, which will be used to create the cryptographic HMAC hash
        .update(plainPassword)                  // Updateing the password
        .digest("hex");                         // Encoding to be used
    } catch (error) {
      return "";
    }
  },
};

module.exports = mongoose.model("Student", studentSchema);