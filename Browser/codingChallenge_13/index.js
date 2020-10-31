// Import stylesheets
import "./style.css";

let timeInMilisecondsSinceEntrance = 0;
let timeInSecondsSinceEntrance = 0;
let multiplerValue = 0;
let boosterSlower = 50;

const input = document.querySelector("input, [name~=input]");
const multipler = document.querySelector("#multipler");
const stopBtn = document.querySelector("#stop_btn");
const startBtn = document.querySelector("#start_btn");

let stoper = window.setInterval(timer, boosterSlower, input);
multipler.addEventListener("click", ev => {
  let validMultipler = Number(ev.target.value);
  validator(validMultipler);

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

function timer(output, secStart = 0, miliSecStart = 0) {
  timeInMilisecondsSinceEntrance += 5;
  if (timeInMilisecondsSinceEntrance === 100) {
    timeInMilisecondsSinceEntrance = 0;
    timeInSecondsSinceEntrance++;
  }
  output.value = `${secStart + timeInSecondsSinceEntrance}.${miliSecStart +
    timeInMilisecondsSinceEntrance} sec.`;
}

function validator(num) {
  if (num === 1 && num > multiplerValue) {
    multiplerValue = 2;
    multipler.value = multiplerValue;
    boosterSlower /= 2;
  } else if (num === -1 && num < multiplerValue) {
    multiplerValue = -2;
    multipler.value = multiplerValue;
    boosterSlower *= 2;
  } else if (multiplerValue === -2 && num > multiplerValue) {
    multiplerValue = 1;
    multipler.value = multiplerValue;
    boosterSlower /= 2;
  } else if (multiplerValue === 2 && num < multiplerValue) {
    multiplerValue = 1;
    multipler.value = multiplerValue;
    boosterSlower *= 2;
  } else if (multiplerValue === 1 && num < multiplerValue) {
    multiplerValue = -2;
    multipler.value = multiplerValue;
    boosterSlower *= 2;
  } else if (num > multiplerValue) {
    if (Math.sign(multiplerValue) === -1) {
      multiplerValue /= 4;
    }
    if (multiplerValue >= 8) {
      multiplerValue = 8;
      multipler.value = multiplerValue;
    } else {
      multiplerValue = multiplerValue *= 2;
      multipler.value = multiplerValue;
      boosterSlower /= 2;
    }
    multipler.value = multiplerValue;
  } else if (num < multiplerValue) {
    if (Math.sign(multiplerValue) === 1) {
      multiplerValue /= 4;
    }

    if (multiplerValue <= -8) {
      multiplerValue = -8;
      multipler.value = multiplerValue;
    } else {
      multiplerValue = multiplerValue *= 2;
      multipler.value = multiplerValue;
      boosterSlower *= 2;
    }
  } else {
    return;
  }
}
