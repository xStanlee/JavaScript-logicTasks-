// Import stylesheets
import "./style.css";
import { Card } from "./card.js";

const generateCat = document.querySelector(".cat__btn");
const renderContent = generateCat.nextElementSibling;
const alreadyPrompetCats = [];

generateCat.addEventListener("click", ev => {
  let randomNumberForSearch = randomNumber(1000);

  if (alreadyPrompetCats.includes(randomNumberForSearch)) {
    alert("That cat already has been shown!");
    return;
  }

  const cat = new Card(randomNumberForSearch);
  alreadyPrompetCats.push(randomNumberForSearch);
  const catContent = document.createElement("div");
  catContent.setAttribute("class", "p-2");
  catContent.innerHTML = cat.renderCard();
  renderContent.appendChild(catContent);

  const cuteButton = catContent.children[0].lastElementChild; // Listener on rendered HTML element
  cuteButton.addEventListener("click", e => {
    e.preventDefault();

    const replaceCat = new Card(++randomNumberForSearch);
    alreadyPrompetCats.push(randomNumberForSearch);
    catContent.innerHTML = replaceCat.renderCard();
  });
});

function randomNumber(maxVal) {
  return Math.floor(Math.random() * Math.floor(maxVal));
}
