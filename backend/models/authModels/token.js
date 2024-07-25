
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // Ensure the reference is the correct model name
        unique: true,
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600 // 1 hour
    }
});

module.exports = mongoose.model("Token", tokenSchema); // Capitalized model name
