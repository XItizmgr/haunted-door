import "./style.css";
const door =  document.querySelector(".door")
const doorAudio = document.getElementById("door-audio")

doorAudio.volume = 0.5
door.addEventListener("click",()=>{
   door.classList.toggle("open")
   doorAudio.play()
})

const backgroundAudio = document.querySelector("#background-audio")

 
let audioStarted = false
backgroundAudio.volume = 0.5
document.addEventListener("click",()=>{
    if(!audioStarted){
        backgroundAudio.play()
        audioStarted = true
    }
})


const audiocontroler = document.querySelector("#audio-controler")
const audiovalue = document.querySelector("#audio-value")

audiocontroler.addEventListener("input",()=>{
    const volume  = audiocontroler.value 
    backgroundAudio.volume = volume /100
    audiovalue.textContent = `${volume}%`
    backgroundAudio.play()
      
})