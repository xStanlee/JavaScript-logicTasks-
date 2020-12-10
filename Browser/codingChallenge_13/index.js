// Import stylesheets
import "./style.css";

let timeInMilisecondsSinceEntrance = 0;
let timeInSecondsSinceEntrance = 0;
let boosterSlower = 50;

const input = document.querySelector("input, [name~=input]");
const multipler = document.querySelector("#multipler");
const stopBtn = document.querySelector("#stop_btn");
const startBtn = document.querySelector("#start_btn");

let stoper = window.setInterval(timer, boosterSlower, input);
let holdedExponent = 0;

multipler.addEventListener("click", ev => {
  if (Math.pow(2, holdedExponent) < ev.target.value) {
    holdedExponent++;
    increaseTimeSpeedCount();
  } else {
    holdedExponent--;
    decreaseTimeSpeedCount();
  }
  ev.target.value = Math.pow(2, holdedExponent);
  clearInterval(stoper);
  stoper = myInterval(timer, boosterSlower, input);
});
stopBtn.addEventListener("click", ev => {
  clearInterval(stoper);
});
startBtn.addEventListener("click", ev => {
  clearInterval(stoper);
  const stoppedTimeAt = input.value.slice(0, input.value.indexOf("s"));
  const seconds = parseInt(stoppedTimeAt.split(".")[0]);
  const miliseconds = parseInt(stoppedTimeAt.split(".")[1]);
  stoper = myInterval(timer, boosterSlower, input, seconds, miliseconds);
});

function myInterval(callback, refresh, output) {
  return window.setInterval(callback, refresh, output);
}

function decreaseTimeSpeedCount() {
  boosterSlower *= 2;
}

function increaseTimeSpeedCount() {
  boosterSlower /= 2;
}

function timer(output, secStart = 0, miliSecStart = 0) {
  timeInMilisecondsSinceEntrance += 5;
  if (timeInMilisecondsSinceEntrance === 100) {
    timeInMilisecondsSinceEntrance = 0;
    timeInSecondsSinceEntrance++;
  }
  output.value = `${secStart + timeInSecondsSinceEntrance}.${miliSecStart +
    timeInMilisecondsSinceEntrance} sec.`;
}
