var mongoose = require('mongoose');

var BannerSchema = new mongoose.Schema({
    bannerFile :String,
    position:Number
   
})

module.exports = mongoose.model('Banners',BannerSchema);