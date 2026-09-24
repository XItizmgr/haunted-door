import "./style.css";

const door = document.querySelector(".door");
const openButton = document.querySelector(".open-btn");

const doorAudio = document.querySelector("#door-audio");
const backgroundAudio = document.querySelector("#background-audio");

const time = document.querySelector(".time");
const jumpscare = document.querySelector(".jumpscare");
const flashlight = document.querySelector(".flashlight");

const audioController = document.querySelector("#audio-controler");
const audioValue = document.querySelector("#audio-value");

const clockAudio = document.querySelector("#clock-audio");
doorAudio.volume = 0.5;
backgroundAudio.volume = 0.5;
clockAudio.volume = 0.5;
let audioStarted = false;
function startBackgroundAudio() {
  if (audioStarted) return;
  backgroundAudio.play();
  audioStarted = true;
}
let seconds = 0;
let clockStarted = false;
function startClock() {
  if (clockStarted) return;
  clockStarted = true;
  clockAudio.currentTime = 0;
  clockAudio.play();
  const clockInterval = setInterval(() => {
    seconds++;
    if (seconds < 15) {
      time.textContent =
        `11:59:${String(45 + seconds).padStart(2, "0")} PM`;
    } else {
      clearInterval(clockInterval);
      time.textContent = "12:00 AM";
      midnight();
    }
  }, 1000);
}

function midnight() {
  clockAudio.pause();
  flashlightEnabled = true
  flashlight.classList.add("active");
  flashlight.style.setProperty( "--mouse-x", `${window.innerWidth / 2}px` );
  flashlight.style.setProperty( "--mouse-y",`${window.innerHeight / 2}px`);
  backgroundAudio.pause();
}

let doorOpened = false;
function openDoor() {
  if (doorOpened) return;
  doorOpened = true;
  door.classList.add("open");
  doorAudio.currentTime = 0;
  doorAudio.play();
  jumpscare.classList.add("active");
}
door.addEventListener("click", openDoor);
openButton.addEventListener("click", openDoor);
document.addEventListener("click", () => {
  startBackgroundAudio();

});

audioController.addEventListener("input", () => {
  const volume = Number(audioController.value);
  backgroundAudio.volume = volume / 100;
  clockAudio.volume = volume / 100;
  doorAudio.volume = volume / 100;
  audioValue.textContent = `${volume}%`;

});
document.addEventListener("mousemove", (event) => {
  if (!flashlightEnabled) return;

  flashlight.style.setProperty("--mouse-x", `${event.clientX}px` );
 flashlight.style.setProperty("--mouse-y", `${event.clientY}px` );
console.log(event.clientX,event.clientY)
});

let flashlightEnabled = false;
startClock();