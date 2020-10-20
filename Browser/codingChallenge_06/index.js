// Import stylesheets
import "./style.css";
import { GreatAlert } from "./class.alert.js";

const stack = [];
const typeOfPopUp = ["Success", "Warning", "Error"];
const mainContainer = document.querySelector(".-m-2");

for (let i = 0; i < 10; i++) {
  const alert = new GreatAlert(randomType()); //RandomAlert
  const individualAlert = creatEl(alert);

  individualAlert.addEventListener("click", ev => {
    individualAlert.parentElement.removeChild(individualAlert);
  });

  removeTimeoutElement(10000, individualAlert);

  mainContainer.appendChild(individualAlert);
  console.log(mainContainer.children.length);
}

function randomType() {
  return typeOfPopUp[Math.floor(Math.random() * Math.floor(3))];
}

function creatEl(instance) {
  const el = document.createElement("div");
  el.setAttribute("class", "p-2");
  el.innerHTML = instance.popUp();
  return el;
}

function removeTimeoutElement(time, el) {
  setTimeout(() => {
    el.innerHTML = "";
  }, time);
}
