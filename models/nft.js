const mongoose = require('mongoose');

var nftSchema = new mongoose.Schema(
    {
        id: 
        {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        standard:
        {
            type: String,
            required: true,
            trim: true
        },
        ownerName:
        {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
        }
    }, {timestamps: true}       // Timestamp will save the exact time in Database when any NFT will be created.
);

module.exports = mongoose.model("NFTs", nftSchema);