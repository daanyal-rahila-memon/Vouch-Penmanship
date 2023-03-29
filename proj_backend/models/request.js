const mongoose = require("mongoose");

var requestSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    // Sender (Student) Roll Numeber
    sender: {
      type: String,
      required: true,
      maxlength: 8,
      trim: true,
    },

    supervisor: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },

    responseStatus: {
      type: String,
      default: "Not Approved",
    },
  },
  { timestamps: true } // Timestamp will save the exact time in Database when any Request will be created.
);

module.exports = mongoose.model("Request", requestSchema);
