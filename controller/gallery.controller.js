const db = require("../model")
const mongoose = require('mongoose');
 const _= require('lodash')
  const Gallery = mongoose.model('Gallery')
  
  module.exports.addgallery = (req,res,next) =>{
    var gallery = new  Gallery()
    gallery.fireBaseUrl = req.body.fireBaseUrl 
    gallery.save((err,doc)=>{
        if(!err)
        res.send(doc);
         else{
                return next(err);
            }
   })
  }
  

  
module.exports.getGallery= (req,res,next)=>{
   Gallery.find(function (err, siteData) {
  if (err) {
  console.log(err);
  }
  else {
  res.json( siteData);
  }
  });
}

module.exports.deletegallery = (req,res,next)=>{
    
    let id = req.params.id;
Gallery.findByIdAndRemove({ _id: req.params.id }, function (err,expense) {
      if (err) res.json(err);
      else res.json('Product Deleted Successfully');
      });
    }


        
  

















