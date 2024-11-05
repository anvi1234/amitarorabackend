var mongoose = require('mongoose');

var ResultSchema = new mongoose.Schema({
    resultImage :String,
    position:Number
   
})

module.exports = mongoose.model('Result',ResultSchema);