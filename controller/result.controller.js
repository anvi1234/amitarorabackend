
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


        
    module.exports.updateResult = (req, res, next) => {
      const { id } = req.params; // Assuming the ID of the banner is provided in the route parameters
      const updateData = req.body; // Data to update from the request body
  
      Result.findByIdAndUpdate(id, updateData, { new: true }, (err, updatedBanner) => {
          if (err) {
              console.log(err);
              return next(err);
          } else if (!updatedBanner) {
              res.status(404).json({ message: "Result not found" });
          } else {
              res.json(updatedBanner);
          }
      });
  };

















