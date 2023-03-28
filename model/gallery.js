var mongoose = require('mongoose');

var GallerySchema = new mongoose.Schema({
    fireBaseUrl :String
   
})

module.exports = mongoose.model('Gallery',GallerySchema);