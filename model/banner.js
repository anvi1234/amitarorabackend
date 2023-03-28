var mongoose = require('mongoose');

var BannerSchema = new mongoose.Schema({
    fireBaseUrl :String
   
})

module.exports = mongoose.model('Banners',BannerSchema);