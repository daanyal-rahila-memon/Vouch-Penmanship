const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

var manuscriptSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            trim: true
          },
          name: {
            type: String,
            required: true,
            maxlength: 200,
            trim: true
          },
          type: {
            type: String,
            required: true,
            maxlength: 20,
            trim: true
          },
          category: {             // from which category this manuscript belongs
            type: ObjectId,
            ref: "Category",
            required: true
          },
          batch: {
            type: Number,
            required: true,
            maxlength: 2,
            trim: true,
          },
          scriptCount: {           // Count the number of manuscripts uploaded in the application
            type: Number,
            required: true,
            maxlength: 1,
            trim: true
          },
          description: {
            type: String,
            maxlength: 2000,
            trim: true
          },
          photo: {                  // Upload a photo of the manuscript to the application
            type: Buffer,
            contentType: String
          }
    }, {timestamps: true}           // Timestamp will save the exact time in Database when any Manuscript will be created.
);

module.exports = mongoose.model("Manuscript", manuscriptSchema);