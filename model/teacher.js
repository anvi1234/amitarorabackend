var mongoose = require('mongoose');

var TeacherSchema = new mongoose.Schema({
    name:String,
    fireBaseUrl :String,
    description:String,
    position:Number
   
})

module.exports = mongoose.model('Teacher',TeacherSchema);