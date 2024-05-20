const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    fullName:{
        type: String
    },
    email:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    dropDown:{
        type:String
    },
    message:{
        type:String
    }
});
const contactModel = mongoose.model("contact", contactSchema);
module.exports = contactModel;
