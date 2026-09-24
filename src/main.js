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

doorAudio.volume = 0.5;
backgroundAudio.volume = 0.5;

let audioStarted = false;

function startBackgroundAudio() {

  if (audioStarted) return;

  backgroundAudio.play();
  audioStarted = true;
}
let doorOpened = false;

function openDoor() {
  if (doorOpened) return;
  doorOpened = true;
  startBackgroundAudio();


  door.classList.add("open");
  doorAudio.currentTime = 0;
  doorAudio.play();
  setTimeout(() => {
    time.textContent = "12:00 AM";
  }, 5000);

  setTimeout(() => {
    backgroundAudio.pause();
    jumpscare.classList.add("active");
  }, 7000);
}

door.addEventListener("click", openDoor);
openButton.addEventListener("click", openDoor);
document.addEventListener("click", () => {

  startBackgroundAudio();

});

audioController.addEventListener("input", () => {
  const volume = Number(audioController.value);
  backgroundAudio.volume = volume / 100;
  audioValue.textContent = `${volume}%`;

});

document.addEventListener("mousemove", (event) => {
  flashlight.style.setProperty(
    "--mouse-x",
    `${event.clientX}px`
  );
  flashlight.style.setProperty(
    "--mouse-y",
    `${event.clientY}px`
  );

});