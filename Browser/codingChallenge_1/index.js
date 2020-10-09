import './style.css';

const CORS_API = 'https://cors-anywhere.herokuapp.com/';
const bookPrefix = 'https://www.goodreads.com/book/auto_complete?format=json&q=';
let nameOfBook = '';

const forms = document.querySelector('.form');
const ul = document.querySelector('.results')

forms.addEventListener('submit', (e) => {
  e.preventDefault();

  nameOfBook = document.querySelector('.form__input').value;
  //Some animation
  const listOfBooks = document.querySelectorAll('.entry');
  clearData(listOfBooks);

  getData(CORS_API + bookPrefix + nameOfBook);
});

async function getData(url ='', data = {}) {

const response = await fetch(url, {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  body: JSON.stringify(data)
})
  .then(response => {
    if(response.ok){
      return response.text();
    }
    throw new Error('There\'s a problem with fetching DATA.');
  })
    .then(data => {
      return JSON.parse(data);
    })
      .then(json => {
        renderData(json);
      })
  .catch(err => {
    alert(err.message);
  })
};

function clearData(previousSearch) {
  previousSearch.forEach(el => el.parentNode.removeChild(el));
};

function renderData(arr) {
  arr.forEach(el => {
    createLi(el);
  });
  console.log('Succed!');
}

  function createLi(obj) {
    const li = document.createElement("li");
    li.classList.add('entry');
    const img = renderImage(obj);
    li.appendChild(img);
    const paragraph = renderParagraph(obj);
    li.appendChild(paragraph);
    const link = linkToGoodReads(obj);
    li.appendChild(link);
    ul.appendChild(li);
  }

  function renderImage(obj) {
    const img = document.createElement("img");
    img.alt = 'Cover';
    img.classList.add('entry__image');
    img.src = obj.imageUrl;
    return img;
  }

  function renderParagraph(obj){
    const p = document.createElement("p");
    p.classList.add('entry__name');
    p.innerText = obj.title;
    return p;
  }
  function linkToGoodReads(obj){
    const small = document.createElement('small');
    const anker = document.createElement('a');
    anker.href = obj.description.fullContentUrl;
    anker.innerText = '>> Link to description <<';
    small.appendChild(anker);
    small.classList.add('puls');
    return small;
  }
