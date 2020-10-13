// Import stylesheets
import "./style.css";

const articleContainer = document.querySelector("main");
const arrOfArticles = [...articleContainer.children];
console.log(articleContainer);
/////////////////////////////////////////
///////////// DRAG
let x = 0;
let y = 0;
let isHolding = false;
let articleNode = {};

arrOfArticles.forEach(el => {
  el.addEventListener("mousedown", e => {
    articleNode = el.cloneNode(true);
    isHolding = true;
    setTimeout(() => {
      el.style.display = "none";
    }, 1000);
  });
});

///////////////////////////////////////////
/////////////// DROP
window.document.addEventListener("mouseup", e => {
  if (isHolding === true) {
    x = e.clientX || 800;
    y = e.clinetY || 400;
    let whereToWrapper = document.elementFromPoint(x, y);
    if (whereToWrapper.children.length === 0) {
      whereToWrapper.appendChild(articleNode);
    } else {
      whereToWrapper = whereToWrapper.parentElement;
      whereToWrapper.appendChild(articleNode);
    }
    isHolding = false;
  }
});
