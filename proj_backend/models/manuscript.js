const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

var manuscriptSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 200,
      trim: true,
    },
    category: {
      // from which category this manuscript belongs
      type: String,
      required: true,
    },
    description: {
      type: String,
      maxlength: 2000,
      trim: true,
    },
    // photo: {
    //   // Upload a photo of the manuscript to the application
    //   data: Buffer,
    //   contentType: String,
    // },
    // document: {
    //   // Upload a file of the draft to the application
    //   data: Buffer,
    //   contentType: String,
    // },
    documentUrl: {
      type: String,
      required: true,
    },
    nft: {
      // it will represent whether the NFT of this document has minted or not
      type: Boolean,
      default: false,
    },
    student: {
      type: ObjectId,
      ref: "Student",
    },
    supervisor: {
      type: ObjectId,
      ref: "Supervisor",
    },
    access: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true } // Timestamp will save the exact time in Database when any Manuscript will be created.
);

module.exports = mongoose.model("Manuscript", manuscriptSchema);
