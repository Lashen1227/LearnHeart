const mongoose = require('mongoose');

const Schema = mongoose.Schema;

 const organizationSchema = new Schema({
    OrgID:{
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
    website: {
        type: String,
        required: false
    },
    userID: {
          type: String,
          required: true
    },
    ProfPic: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Organization', organizationSchema);