var mongoose = require('mongoose');

var TeacherSchema = new mongoose.Schema({
    teacherName:String,
    teacherImage :String,
    teacherDetails:String,
    teacherDescription:String,
    teacherLevel:String,
    position:Number
   
})

module.exports = mongoose.model('Teacher',TeacherSchema);