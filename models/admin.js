const crypto = require("crypto");
const mongoose = require("mongoose");
import { v4 as uuidv4 } from "uuid";

var adminSchema = new mongoose.Schema(
    {
        id:
        {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        name:
        {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
        },
        position:
        {
            type: String,
            required: true
        },
        role:
        {
            type: String,
            required: true
        },
        email: 
        {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        salt: String, // is a random string (collection of alpha-numerics) added to the password to make it stronger
        encryPassword: 
        {
            type: String,
            required: true,
        }
    }, {timestamps: true}       // Timestamp will save the exact time in Database when any Admin will be created.
);

// Create a virtual property `password` to secure it using hash & then store it in our database -> encryPassword.
adminSchema.virtuals("password")
    .get(function()
    {
        return this._password;
    })
    .set(function()
    {
        this._password = password;
        this.salt = uuidv4();     // this is how to populate the salt
        this.encryPassword = this.securePassword(password);
    })

// Definitions of the methods in this schema
adminSchema.methods = {

    // authentication method for authentication of the password
    authenticate: function(plainPassword)
    {
        return this.securePassword(plainPassword) === this.encryPassword;
    },

    // Securing password using hash & salt
    securePassword: function(plainPassword)
    {
        if (!plainPassword) return "";
        try {
            return createHmac("sha256", this.salt)    // CreateHmac(algorithm, key) -- createHmac is used to create Hash object
                                                        // Encryption Algorithm is 'sha256' over here
                                                        // Key is the salt, which will be used to create the cryptographic HMAC hash
                .update(plainPassword)                  // Updateing the password
                .digest("hex");                         // Encoding to be used
        } catch (error) {
            return "";
        }
    }
};

module.exports = mongoose.model("Admin", adminSchema);