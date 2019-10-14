const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const registerSchema = new Schema({
    firstName :{
        type: String,
        unique : false,
        required : true
    },
    fatherName :{
        type: String,
        unique : false,
        required : true
    },
    grandFatherName :{
        type: String,
        unique : false,
        required : true
    },
    gender :{
        type: String,
        unique : false,
        required : true
    },
    dateOfBirth :{
        type: String,
        unique : false,
        required : true
    },
    maritalStatus :{
        type: String,
        unique : false,
        required : true
    },
    mobileNumber :{
        type: String,
        unique : false,
        required : true
    },
    emailAddress :{
        type: String,
        unique : false,
        required : true
    },
    regionCity :{
        type: String,
        unique : false,
        required : true
    },
    subcity :{
        type: String,
        unique : false,
        required : true
    },
    wereda : {
        type: String,
        unique : false,
        required : true
    },
    idNumber : {
        type: String,
        unique : false,
        required : true
    },
    verifyNumber: {
        type: String,
        unique : false,
        required : true
    },
    status: {
        type:String,
        unique : false,
        required : true
    },
    fingerPrint: {
        type:String,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

module.exports = registerSchema;