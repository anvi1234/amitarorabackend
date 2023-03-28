const db = require("../model")
const mongoose = require('mongoose');
 const _= require('lodash')
  const Banner = mongoose.model('Banners')
  
  module.exports.addbanner = (req,res,next) =>{
    var banner = new  Banner()
    banner.fireBaseUrl = req.body.fireBaseUrl 
    banner.save((err,doc)=>{
        if(!err)
        res.send(doc);
         else{
                return next(err);
            }
   })
  }
  

  
module.exports.getbanner= (req,res,next)=>{
   Banner.find(function (err, siteData) {
  if (err) {
  console.log(err);
  }
  else {
  res.json( siteData);
  }
  });
}

module.exports.deletebanner = (req,res,next)=>{
    
    let id = req.params.id;
    Banner.findByIdAndRemove({ _id: req.params.id }, function (err,expense) {
      if (err) res.json(err);
      else res.json('Product Deleted Successfully');
      });
    }


        
  

















