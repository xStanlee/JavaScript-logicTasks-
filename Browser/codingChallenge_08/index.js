// Import stylesheets
import "./style.css";

let currentPage = 1;

const mainContainer = document.querySelector(".flex-grow");
let collectionHTML = mainContainer.querySelector(".w-full").children;
const arrayOfElements = Array.from(collectionHTML);

//Buttons
const previousBtn = document.querySelector("#btn_prev");
const nextBtn = document.querySelector("#btn_next");

const btn_1 = document.querySelector("#btn_1");
const btn_2 = document.querySelector("#btn_2");
const btn_3 = document.querySelector("#btn_3");

// Listeners
previousBtn.addEventListener("click", () => {
  currentPage--;
  currentPage < 1 ? (currentPage = 1) : currentPage;
  onPageChange(currentPage);
});
nextBtn.addEventListener("click", () => {
  currentPage++;
  currentPage > 3 ? (currentPage = 3) : currentPage;
  onPageChange(currentPage);
});

btn_1.addEventListener("click", () => {
  currentPage = Number(btn_1.innerHTML);
  nextBtn.style.visibility = "visible";
  onPageChange(currentPage);
});
btn_2.addEventListener("click", () => {
  currentPage = Number(btn_2.innerHTML);
  onPageChange(currentPage);
});
btn_3.addEventListener("click", () => {
  currentPage = Number(btn_3.innerHTML);
  previousBtn.style.visibility = "visible";
  onPageChange(currentPage);
});

onPageChange(currentPage);

// Logic
function onPageChange(currPage) {
  mainContainer.querySelector(".w-full").innerHTML = "";

  dealWithButtons(currPage);
  const singlePageContent = calcContent(arrayOfElements, currPage);
  renderContent(singlePageContent);
}

function calcContent(arr, page) {
  const pageContent = [];
  const firstElement = page * 2 - 1;
  const secondElement = page * 2 - 2;
  pageContent.push(arr[firstElement]);
  pageContent.push(arr[secondElement]);
  return pageContent;
}

function renderContent(arr) {
  arr.forEach(el => {
    mainContainer.querySelector(".w-full").appendChild(el);
  });
}

function dealWithButtons(page) {
  switch (page) {
    case 1:
      previousBtn.style.visibility = "hidden";
      break;
    case 3:
      nextBtn.style.visibility = "hidden";
      break;
    default:
      previousBtn.style.visibility = "visible";
      nextBtn.style.visibility = "visible";
  }
}
