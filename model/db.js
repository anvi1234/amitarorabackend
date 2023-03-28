const { json } = require('body-parser');
const mongoose = require('mongoose');

const DB = 'mongodb+srv://Sumit123:Sumit123@cluster0.cyzquqs.mongodb.net/Prominent?retryWrites=true&w=majority'
// const DB ='mongodb://127.0.0.1:27017/rashanWala' 
mongoose.connect(DB).then(()=>{
    console.log("Mongodb connected successfully");
}).catch((err)=>{
    console.log("no connection",err);
})

require("./teacher");
require("./banner");
require("./gallery");
require("./result");

