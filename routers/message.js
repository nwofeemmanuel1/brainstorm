const express=require("express")
const Message=require("../model/message")
const isvalid=require("./validateMessage")
const router=express.Router()

router.post("/",async(req,res)=>{
  const messageIsvalid= isvalid(req)
  if(messageIsvalid==true){

  
    
   try{
      const message= await new Message({
name:req.body.name,
email:req.body.email,
phone:req.body.phone,
message:req.body.message
    })
   const result= await message.save()
 res.json({error:false,message:"success"})

   }catch(err){
      res.json({error:true,errMessage:err.message})
   }

}else{
   return res.json({error:true,errMessage:messageIsvalid})
}
   
})

module.exports=router