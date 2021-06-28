// const fetch=require("isomorphic-fetch")

// fetchuser=async()=>{
// const response=await fetch("/download",)
// const result=await response.text()
// console.log(result)

// }
// fetchuser()
document.querySelector("#download1").onclick=()=>{
  //  fetchuser()document.querySelector("#download").innerHTML="Downloading..."

  document.querySelector("#download1").innerHTML="Downloading..."

}


document.querySelector("#download").onclick=async()=>{
  // await  fetchuser()
  document.querySelector("#download").innerHTML="Downloading..."
}
