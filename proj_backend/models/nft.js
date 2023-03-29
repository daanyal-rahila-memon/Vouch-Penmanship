const mongoose = require("mongoose");

var nftSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    standard: {
      type: String,
      required: true,
      trim: true,
    },
    manuscript: {
      type: ObjectId,
      ref: "Manuscript",
    },
    owner: {
      type: ObjectId,
      ref: "Student",
    },
    supervisor: {
      type: ObjectId,
      ref: "Supervisor",
    },
  },
  { timestamps: true } // Timestamp will save the exact time in Database when any NFT will be created.
);

module.exports = mongoose.model("NFTs", nftSchema);
