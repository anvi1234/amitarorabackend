var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    name:String,
    email :String,
    subject:String,
    message:String,
    phone:Number   
})

module.exports = mongoose.model('Contact',ContactSchema
);