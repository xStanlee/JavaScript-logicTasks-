// Tutaj napisz swój kod
const tbody = document.querySelector('tbody');
const collectionOfTr = Array.from(tbody.querySelectorAll('tr'));
const sortBtn = document.querySelector('#sort');
let arrow = sortBtn.firstChild;
console.log(arrow);
let reverse = false;
sortBtn.addEventListener('click', (e) => {
  if(!reverse){
    arrow.classList.remove('fa-caret-down');
    arrow.classList.add('fa-caret-up');
    reverseSort(collectionOfTr);
    reverse = true;
  }else{ 
    arrow.classList.remove('fa-caret-up');
    arrow.classList.add('fa-caret-down');
    normalSort(collectionOfTr);
    reverse = false;
  }
  tbody.innerHTML = '';
  collectionOfTr.forEach(el => {
    tbody.appendChild(el);
  });
});

function normalSort(collection){
collection.sort((a, b) => Number(b.cells[2].innerText) - Number(a.cells[2].innerText));
}

function reverseSort(collection){
collection.sort((a, b) => Number(a.cells[2].innerText) - Number(b.cells[2].innerText));
}

function getSecondsFromNode(el){
  return el.firstChild.data;
}
function calcTimeAtHour(sec){
  const numTypeSec = Number(sec);
  const restOfSec = numTypeSec % 60;
  const minutes = (numTypeSec - restOfSec) / 60;
  const restOfMinutes = minutes % 60;
  const hours = (minutes - restOfMinutes) / 60;

  return `${hours}:${restOfMinutes}:${restOfSec}`
}

//timeCell.parentElement.innerHTML = '';
