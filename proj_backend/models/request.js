const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

var requestSchema = new mongoose.Schema(
  {
    // Manuscript
    manuscriptUrl: {
      type: String,
      required: true,
    },
    supervisor: {
      type: ObjectId,
      ref: "Supervisor",
    },
    supervisor: {
      type: ObjectId,
      ref: "Supervisor",
    },
    responseStatus: {
      type: String,
      default: "Not Approved",
    },
  },
  { timestamps: true } // Timestamp will save the exact time in Database when any Request will be created.
);

module.exports = mongoose.model("Request", requestSchema);
