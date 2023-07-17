const mongoose = require('mongoose');

const trySchema = new mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Try', trySchema);