// Import stylesheets
import "./style.css";

let draggedElement;
const wrappers = document.querySelectorAll("main");
wrappers.forEach(main => {
  main.setAttribute("class", "wrapper");
});

function addPropertiesToArtciles(nodeList) {
  let idForArtcile = 0;
  nodeList.forEach(main => {
    const article = main.children;
    for (const every of article) {
      setSpecifiedAttributes(every, idForArtcile);
      idForArtcile++;
    }
  });
}

function setSpecifiedAttributes(article, id) {
  article.setAttribute("draggable", "true");
  article.setAttribute("id", `article__${id}`);
}

addPropertiesToArtciles(wrappers);

document.addEventListener("drag", () => {}, false);
document.addEventListener(
  "dragstart",
  ev => {
    draggedElement = ev.target;
    if (
      ev.target.tagName === "header".toUpperCase() ||
      ev.target.tagName === "footer".toUpperCase() ||
      ev.target.tagName === "a".toUpperCase() ||
      ev.target.tagName === "img".toUpperCase() || // oneParentElement
      ev.target.tagName === "p".toUpperCase() ||
      ev.target.tagName === "h1".toUpperCase() // Make func from it
    ) {
      draggedElement = ev.target.parentElement;
      draggedElement.tagName === "article".toUpperCase()
        ? draggedElement
        : (draggedElement = draggedElement.parentElement.parentElement);
    }
    draggedElement.style.opacity = ".6";
  },
  false
);

document.addEventListener(
  "dragend",
  ev => {
    ev.target.style.opacity = "";
  },
  false
);

document.addEventListener(
  "dragover",
  ev => {
    ev.preventDefault();
  },
  false
);

document.addEventListener("dragenter", ev => {
  if (ev.target.className == "wrapper") {
    ev.target.style.background = "purple";
  }
});

document.addEventListener(
  "dragleave",
  ev => {
    if (ev.target.className === "wrapper") {
      ev.target.style.background = "";
    }
  },
  false
);

document.addEventListener(
  "drop",
  e => {
    e.preventDefault();

    if (e.target.className === "wrapper") {
      e.target.style.background = "";
      draggedElement.parentNode.removeChild(draggedElement);
      e.target.appendChild(draggedElement);
    }
  },
  false
);
