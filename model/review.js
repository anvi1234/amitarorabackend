var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
    studentName :String,
    studentImage:String,
    studentDetails:String,
    reviewDescription:String
   
})

module.exports = mongoose.model('Review', ReviewSchema);