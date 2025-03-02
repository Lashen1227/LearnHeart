const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    seminarId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seminar',
        required: true,
    },
    reviewer: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Review', reviewSchema);
