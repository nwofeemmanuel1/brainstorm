
// const fetch=require("isomorphic-fetch")

// fetchuser=async(name,email,phone,message)=>{
// const response=await fetch("/message",{
// method:"POST",
// headers:{"content-type":"application/json"},
// body:JSON.stringify({
//     name,email,phone,message
// })})
// const result=await response.json()
// console.log(result)

// }
// fetchuser("chidera","dd@gmail.com",9299289029,"message")

const fetch=require("isomorphic-fetch")

fetchuser=async()=>{
const response=await fetch("http://localhost:3000/download",)
const result=await response.text()
console.log(result)

}
fetchuser()