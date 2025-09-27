var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    name:String,
    email :String,
    subject:String,
    message:String,
    phone:Number,
    date: {
        type: Date  // this will set the current date automatically
    }
})

module.exports = mongoose.model('Contact',ContactSchema
);