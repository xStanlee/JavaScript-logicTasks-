// Import stylesheets
import "./style.css";

let mainModal = document.querySelector(".main-modal");
const containerContent = mainModal.cloneNode(true);

let closeBtn = document.querySelector("svg").parentElement;
const popUpModalBtn = document.querySelector("#challengeAccepted");

closeBtn.addEventListener("click", () => {
  mainModal.parentElement.removeChild(mainModal);
});

popUpModalBtn.addEventListener("click", () => {
  document.body.appendChild(containerContent);
  mainModal = document.body.querySelector(".main-modal");
  closeBtn = document.querySelector("svg").parentElement;
  closeBtn.addEventListener("click", () => {
    if (mainModal.parentElement !== null) {
      mainModal.parentElement.removeChild(mainModal);
    }
  });
});
