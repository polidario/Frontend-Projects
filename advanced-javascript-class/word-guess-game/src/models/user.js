const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);