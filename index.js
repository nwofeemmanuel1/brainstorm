const express=require("express")
const app=express()
app.use(express.json())


const message=require("./routers/message")
app.use("/",express.static("html"))
app.use("/message",message)

app.get("/download",(req,res)=>{
  const file=`${__dirname}/html/js/base.apk`
  res.download(file)

})

const port =process.env.PORT ||3000
app.listen(port,()=>console.log(`listening on ${port}`))
