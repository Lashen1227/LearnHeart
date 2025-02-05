const mongoose = require('mongoose')
const {Schema} = mongoose;

const schoolSchema = new Schema(
    {
        schoolName: {
            type: String,
            required: true,
            default: "School name"
        },
        contact:{
            type : Number,
            required : true,
            default : "0"
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
module.exports = mongoose.model('School',schoolSchema);