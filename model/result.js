var mongoose = require('mongoose');

var ResultSchema = new mongoose.Schema({
    fireBaseUrl :String
   
})

module.exports = mongoose.model('Result',ResultSchema);