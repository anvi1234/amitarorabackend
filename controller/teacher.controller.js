const db = require("../model")
const mongoose = require('mongoose');
 const _= require('lodash')
  const Teacher = mongoose.model('Teacher')
  
  module.exports.addteacher = (req,res,next) =>{
    var teacher = new  Teacher()

    teacher.name = req.body.name,
    teacher.fireBaseUrl = req.body.fireBaseUrl ,
    teacher.description = req.body.description,
    teacher.position = req.body.position
    teacher.save((err,doc)=>{
        if(!err)
        res.send(doc);
         else{
                return next(err);
            }
   })
  }
  

  
module.exports.getTeacher = (req,res,next)=>{
    Teacher.find(function (err, siteData) {
  if (err) {
  console.log(err);
  }
  else {
  res.json( siteData);
  }
  });
}

module.exports.deletePTeacher = (req,res,next)=>{
    
    let id = req.params.id;
    Teacher.findByIdAndRemove({ _id: req.params.id }, function (err,expense) {
      if (err) res.json(err);
      else res.json('Product Deleted Successfully');
      });
    }


    module.exports.updateTeacher= (req,res,next)=>{
        Teacher.findById(req.params.id, function (err,teacher) {
          if (!teacher)
          return next(new Error('Unable To Find Expenses With This Id'));
          else {
          
            teacher.name = req.body.name,
            teacher.fireBaseUrl = req.body.fireBaseUrl,
            teacher.description = req.body.description,
            teacher.position = req.body.position
            teacher.save().then(emp => {

            res.json('teacher Updated Successfully');
            
          })
          .catch(err => {
          res.status(400).send("Unable To Update Expenses");
          });
          }
          });
        }

        module.exports.getTeacherById = (req,res,next)=>{
            let id = req.params.id;
              Teacher.findOne({_id:id},
              (err,user)=>{
                  if(!user)
                  return res.status(404).json({
                      status:false,message:"User not found"
                  })
                else
                  return res.status(200).json({
                      status:true,user: user
                  })
              }
              )
             }
      
        
  

















