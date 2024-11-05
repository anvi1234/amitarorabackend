
  const Result = require('../model/result');
  module.exports.addResult = (req,res,next) =>{
    var result = new  Result()
    result.resultImage = req.body.resultImage 
    result.position = req.body.position
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


        
  

















