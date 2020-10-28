// Import stylesheets
import "./style.css";

const mainContainer = document.querySelector("#main-container");
const paragraphsWithNames = document.querySelectorAll(".name-holder");
const singleContentContainers = document.querySelectorAll(".content-holder");
const searchBar = document.querySelector("#search-bar");

const innerTextOfParagraphs = [];
const pairObject = new Map();
let typedInputValue = "";

getNamesInLowerCase(paragraphsWithNames, innerTextOfParagraphs);
createMap(innerTextOfParagraphs, singleContentContainers);

searchBar.addEventListener("keyup", ev => {
  if (!deleteKeyboardSpecialCharacters(ev.which)) {
    return;
  }
  const char = ev.key.toLowerCase();
  typedInputValue = backspaceUsage(typedInputValue, char);

  const result = innerTextOfParagraphs.filter(res =>
    res.includes(typedInputValue)
  );

  getResult(result);
});

function getNamesInLowerCase(nodeList, arr) {
  nodeList.forEach(el => {
    arr.push(el.innerText.toLowerCase());
  });
}

function backspaceUsage(str, key) {
  if (key === "backspace" && str.length !== 0) {
    const removedLastCharText = str.slice(0, -1);
    return removedLastCharText;
  } else if (key === "backspace" && str.length === 0) {
    const emptyString = "";
    return emptyString;
  } else {
    let addCharacterToSentce = str;
    addCharacterToSentce += key;
    return addCharacterToSentce;
  }
}

function deleteKeyboardSpecialCharacters(keyCode) {
  if (keyCode < 65 && keyCode !== 8 && keyCode !== 32) {
    return false;
  } else if (keyCode > 122) {
    return false;
  } else if (keyCode > 90 && keyCode < 97) {
    return false;
  } else {
    return true;
  }
}

function createMap(arrOfNames, nodeOfContent) {
  for (let i = 0; i < arrOfNames.length; i++) {
    pairObject.set(arrOfNames[i], nodeOfContent[i]);
  }
}

function getResult(filltredArr) {
  mainContainer.lastElementChild.innerHTML = "";

  filltredArr.forEach(el => {
    const domEl = pairObject.get(el);
    renderElement(mainContainer.lastElementChild, domEl);
  });

  function renderElement(container, el) {
    container.appendChild(el);
  }
}
