// Import stylesheets
import "./style.css";

let draggedElement;
const wrappers = document.querySelectorAll("main");
let wrapperID = 0;
addPropertiesToArtciles(wrappers);

wrappers.forEach(main => {
  main.setAttribute("id", `wrapper__${wrapperID}`);
  main.addEventListener("dragover", ev => {
    ev.preventDefault();
  });
  main.addEventListener("drop", ev => {
    const droppingData = ev.dataTransfer.getData("text");
    const article = document.querySelector(droppingData);
    main.appendChild(article);
  });
  wrapperID++;
});

function addPropertiesToArtciles(nodeList) {
  let idForArtcile = 0;
  nodeList.forEach(main => {
    const article = main.children;
    for (const every of article) {
      setSpecifiedAttributes(every, idForArtcile);
      addDraggedElementListener(idForArtcile);
      idForArtcile++;
    }
  });

  function setSpecifiedAttributes(article, id) {
    article.setAttribute("draggable", "true");
    article.setAttribute("id", `article__${id}`);
  }

  function addDraggedElementListener(id) {
    const articleID = `#article__${id}`;
    const el = document.querySelector(articleID);
    el.addEventListener("dragstart", ev => {
      ev.dataTransfer.setData("text/plain", articleID);
    });
  }
}
