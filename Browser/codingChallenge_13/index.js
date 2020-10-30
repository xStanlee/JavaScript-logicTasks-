// Import stylesheets
import "./style.css";

let timeInMilisecondsSinceEntrance = 0;
let timeInSecondsSinceEntrance = 0;
let multiplerValue = 0;

const input = document.querySelector("input, [name~=input]");
const multipler = document.querySelector("#multipler");

let stoper = window.setInterval(timer, 50, input);
multipler.addEventListener("click", ev => {
  let validMultipler = Number(ev.target.value);
  validator(validMultipler);

  console.log(multiplerValue);

  clearInterval(stoper);
});

function myInterval(callback, refresh, output) {
  const boostStopper = window.setInterval(callback, refresh, output);
}

function timer(output) {
  timeInMilisecondsSinceEntrance += 5;
  if (timeInMilisecondsSinceEntrance === 100) {
    timeInMilisecondsSinceEntrance = 0;
    timeInSecondsSinceEntrance++;
  }
  output.value = `${timeInSecondsSinceEntrance}.${timeInMilisecondsSinceEntrance} sec.`;
}

function validator(num) {
  if (num === 1 && num > multiplerValue) {
    multiplerValue = 2;
    multipler.value = multiplerValue;
  } else if (num === -1 && num < multiplerValue) {
    multiplerValue = -2;
    multipler.value = multiplerValue;
  } else if (multiplerValue === -2 && num > multiplerValue) {
    multiplerValue = 1;
    multipler.value = multiplerValue;
  } else if (multiplerValue === 2 && num < multiplerValue) {
    multiplerValue = 1;
    multipler.value = multiplerValue;
  } else if (multiplerValue === 1 && num < multiplerValue) {
    multiplerValue = -2;
    multipler.value = multiplerValue;
  } else if (num > multiplerValue) {
    multiplerValue >= 8 ? (multiplerValue = 8) : (multiplerValue *= 2);
    multipler.value = multiplerValue;
  } else if (num < multiplerValue) {
    let devide = multiplerValue;
    if (Math.sign(devide) === -1) {
    }
    multiplerValue = multiplerValue / 2;
    multipler.value = multiplerValue;
  } else {
    return;
  }
}
