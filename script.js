let div=document.querySelectorAll("div")

karmir.onclick = function() {
    this.style.background = "red"
}

setTimeout(()=>{
    karmir.onclick()
},3000,)



dexin.onclick = function() {
    this.style.background = "yellow"
}

setTimeout(()=>{
    dexin.onclick()
},5000)


kanach.onclick = function() {
  this.style.background = "green"
}

setTimeout(()=>{
    kanach.onclick()
},6200)