const mongoose = require('mongoose');

var gallerySchema = new mongoose.Schema(
    {
        title:
        {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        theme: 
        {
            type: String,
            required: true
        },
        style:
        {
            type: String,
            required: true
        },
        ownerName:
        {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
        },
        supervisorName:
        {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
        }
    }, {timestamps: true}       // Timestamp will save the exact time in Database when any Project will be published in the Gallery.
);

module.exports = mongoose.model("Gallery", gallerySchema);