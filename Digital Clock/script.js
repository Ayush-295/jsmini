const hour=document.querySelector(".hour")
const minute=document.querySelector(".minute")
const second=document.querySelector(".second")

const setTime=()=>{
    let currentDate=new Date()
    hour.innerText=currentDate.getHours().toString().padStart(2,"0")
    minute.innerText=currentDate.getMinutes().toString().padStart(2,"0")
    second.innerText=currentDate.getSeconds().toString().padStart(2,"0")
}
setInterval(setTime,1000)