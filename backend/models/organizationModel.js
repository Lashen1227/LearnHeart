const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    orgID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: false
    },
    userID: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: true
    },
    seminarLocations: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Organization', organizationSchema);