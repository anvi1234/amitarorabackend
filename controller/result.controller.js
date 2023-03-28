const db = require("../model")
const mongoose = require('mongoose');
 const _= require('lodash')
  const Result = mongoose.model('Result')
  
  module.exports.addResult = (req,res,next) =>{
    var result = new  Result()
    result.fireBaseUrl = req.body.fireBaseUrl 
    result.save((err,doc)=>{
        if(!err)
        res.send(doc);
         else{
                return next(err);
            }
   })
  }
  

  
module.exports.getResult= (req,res,next)=>{
   Result.find(function (err, siteData) {
  if (err) {
  console.log(err);
  }
  else {
  res.json( siteData);
  }
  });
}

module.exports.deleteResult = (req,res,next)=>{
    
    let id = req.params.id;
    Result.findByIdAndRemove({ _id: req.params.id }, function (err,expense) {
      if (err) res.json(err);
      else res.json('Product Deleted Successfully');
      });
    }


        
  

















