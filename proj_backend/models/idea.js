const mongoose = require('mongoose');

var ideaSchema = new mongoose.Schema(
    {
        id: 
        {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        title:
        {
            type: String,
            required: true,
            unique: true,
            maxlength: 50,
            trim: true
        },
        category:
        {
            type: String,
            required: true,
            trim: true
        },
        uploadDate: Date,
        validity: Date,
        supervisorName:
        {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
        },
        description: 
        {
            type: String,
            maxlength: 200,
            trim: true
        }
    }, {timestamps: true}       // Timestamp will save the exact time in Database when any Idea will be created.
);

module.exports = mongoose.model("Ideas", ideaSchema);