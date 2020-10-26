// Import stylesheets
import "./style.css";

const fileUpload = document.querySelector("#file-upload");
const infoContainer = document.querySelector(".render-info");

let resetData = 1;

fileUpload.addEventListener("change", ev => {
  ev.preventDefault();

  if (resetData !== 1) {
    resetData = 1;
    infoContainer.innerHTML = "";
  }
  const fileReff = fileUpload.files[0];

  const nameOfFile = getNameOfFlie(fileReff);
  const sizeOfFlie = getSizeOfFlie(fileReff);
  const extensionOfFile = getExtension(fileReff);

  renderData(infoContainer, nameOfFile, sizeOfFlie, extensionOfFile);
  resetData++;
});

function getNameOfFlie(obj) {
  let fileName = obj.name;
  fileName = fileName.split(".");
  return fileName[0];
}

function getSizeOfFlie(obj) {
  let fileSize = obj.size;
  fileSize = Math.round(fileSize / 1024);
  return fileSize + "kb";
}

function getExtension(obj) {
  const extensionFile = obj.type;
  return extensionFile;
}

function renderData(container, name, size, ext) {
  const dataArr = [name, size, ext];
  dataArr.forEach(el => {
    const child = document.createElement("div");

    child.setAttribute("class", "bg-red");
    child.setAttribute("class", "text-white");
    child.setAttribute("class", "w-64");

    child.innerHTML = `${dataArr.indexOf(el) + 1}. ${el} `;
    container.appendChild(child);
  });
}
