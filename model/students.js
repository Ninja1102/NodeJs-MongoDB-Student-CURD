const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
