const Joi=require("joi")

const validateMessage=(req)=>{

    const schema={
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        phone:Joi.number().required().min(0),
        message:Joi.string().required()
    }
    const result=Joi.validate({name:req.body.name,email:req.body.email,phone:req.body.phone,message:req.body.message},schema)

if(result.error){return (result.error.details[0].message)
}else{
return true
}

}

module.exports=validateMessage