const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

var ideaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    uploadDate: Date,
    validity: Date,
    supervisor: {
      type: ObjectId,
      ref: "Supervisor",
    },
    description: {
      type: String,
      maxlength: 1000,
      trim: true,
    },
  },
  { timestamps: true } // Timestamp will save the exact time in Database when any Idea will be created.
);

module.exports = mongoose.model("Ideas", ideaSchema);
