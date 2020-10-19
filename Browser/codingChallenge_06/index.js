// Import stylesheets
import "./style.css";
import { GreatAlert } from "./class.alert.js";

const stack = [];
const typeOfPopUp = ["Success", "Warning", "Error"];
const mainContainer = document.querySelector(".-m-2");

for (let i = 0; i < 10; i++) {
  if (i % 3 === 0) {
    mainContainer.innerHTML = "";
  }
  const alert = new GreatAlert(randomType()); //RandomAlert
  const individualAlert = creatEl();

  individualAlert.innerHTML = alert.popUp();
  setTimeout(() => {
    individualAlert.parentElement.removeChild(individualAlert);
  }, 10000);
  mainContainer.appendChild(individualAlert);
}

function randomType() {
  return typeOfPopUp[Math.floor(Math.random() * Math.floor(3))];
}

function creatEl() {
  const el = document.createElement("div");
  el.setAttribute("class", "p-2");
  return el;
}
