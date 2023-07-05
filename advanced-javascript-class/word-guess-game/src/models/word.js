const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        minLength: [6, 'Must be at least 6, got {VALUE}'],
        maxLength: [12, 'Must be less than 12, got {VALUE}']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Word', wordSchema);