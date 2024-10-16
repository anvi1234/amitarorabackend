const { json } = require('body-parser');
const mongoose = require('mongoose');

const DB = 'mongodb+srv://noidaclasses:Noida1234@cluster0.vylmkbr.mongodb.net/NoidaDB?retryWrites=true&w=majority'
// const DB ='mongodb://127.0.0.1:27017/rashanWala' 
mongoose.connect(DB).then(()=>{
    console.log("Mongodb connected successfully");
}).catch((err)=>{
    console.log("no connection",err);
})

require("./teacher");
require("./banner");
require("./contact");
require("./buy-course");
require("./result");
require("./review");
require("./gallery")

