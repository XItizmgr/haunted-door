import "./style.css";
const door =  document.querySelector(".door")
const doorAudio = document.getElementById("door-audio")

doorAudio.volume = 0.5
door.addEventListener("click",()=>{
   door.classList.toggle("open")
   doorAudio.play()
})

const backgroundAudio = document.querySelector("#background-audio")


backgroundAudio.volume = 0.5
document.addEventListener("click",()=>{
    backgroundAudio.play()
})