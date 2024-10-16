var mongoose = require('mongoose');

var ResultSchema = new mongoose.Schema({
    resultImage :String
   
})

module.exports = mongoose.model('Result',ResultSchema);