const mongoose = require('express')
const {Schema} = mongoose;

const schoolSchema = new Schema(
    {
        schoolName: {
            type: String,
            required: true,
            default: "School name"
        },
        owner:{
            type : String,
            required : true,
            default : "not mentioned"
        },
        username: {
            type: String,
            required: true,
            default: "User"
        },
        email: {
            type: String,
            required: true,
            match: [/.+\@.+\..+/, "Please fill a valid email address"],
            default: "noemail"
        },
        password: {
            type: String,
            required: true,
            select: false
        }
    },{
        timestamps : true
    }
);
module.exports = mongoose.module('school',schoolSchema);