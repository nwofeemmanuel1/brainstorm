 const mongoose=require("mongoose")
const config=require("config")
require("dotenv").config()
mongoose.connect(process.env. connectionUrl,{useNewUrlParser:true,useUnifiedTopology: true })
.then(()=>console.log("connected to database"))
.catch(err=>console.log(err))
const messageSchema=new mongoose.Schema({
name:{
type:String,
required:true,
},
email:{
    type:String,
    required:true
},
phone:{
    type:Number,
    required:true,
    min:0
},
message:{
    type:String,
    required:true,
}

})

const Message=mongoose.model("message",messageSchema)
module.exports=Message





// const config=require("config")
// console.log(config.get("connection.url"))
