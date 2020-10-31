// Import stylesheets
import "./style.css";

const arrows = document.querySelectorAll("svg");
let clonedNode = document.querySelector("#lorem");
console.log(arrows);

arrows.forEach(el =>
  el.addEventListener("click", ev => {
    const header = el.parentElement.parentElement;
    const article = header.nextElementSibling || null;
    if (article !== null) {
      clonedNode = article.cloneNode(true);
      article.parentElement.removeChild(article);
    } else {
      header.parentElement.appendChild(clonedNode);
    }
  })
);
