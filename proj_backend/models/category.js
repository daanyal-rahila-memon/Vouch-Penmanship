const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(         // This schema is likely to have various collections like AI collections, Robotics collections, etc...
    {
        name:
        {
            type: String,
            required: true,
            unique: true,
            maxlength: 32,
            trim: true
        }
    }, { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);