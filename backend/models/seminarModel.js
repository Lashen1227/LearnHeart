const mongoose = require('mongoose');
const { Schema } = mongoose;

const seminarSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            default: "Seminar"
        },
        description: {
            type: String,
            required: true,
            default: "This is a seminar"
        },
        rating: {
            type: Number,
            required: true,
            default: 0
        },
        location: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            default: "pending"
        },
        subject: {
            type: String,
            required: true
        },
        grade: {
            type: Number,
            required: true
        },
        expStudentCount: {
            type: Number,
            required: true
        },
        expTeacherCount: {
            type: Number,
            required: true
        },
        additionalRequests: {
            type: String,
            required: true,
            default: "No additional requests"
        },
        expDate: {
            type: String,
            required: true
        },
        volunteers: [
            {
                volunteerId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Volunteer', // Reference to the Volunteer model
                },
            },
        ],
        schoolId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true // Reference to the School model
        },
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
    },
    {
        timestamps: true, // Show timestamps
    }
);

module.exports = mongoose.model('Seminar', seminarSchema);
