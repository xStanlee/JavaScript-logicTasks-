// Import stylesheets
import "./style.css";

const itemContainerKurs = document.querySelector("h2").parentElement
  .parentElement;
const itemContainerKonsutlacje = itemContainerKurs.nextElementSibling;
const sumOfEverythingInStore = document
  .querySelector("footer")
  .querySelector("span");

const items = [];
items.push(itemContainerKurs);
items.push(itemContainerKonsutlacje);

let sum = 0,
  priceOfElement;
items.forEach(el => {
  let itemCounter = 0;
  const input = el.querySelector("input");
  console.log(input);
  input.addEventListener("change", ev => {
    priceOfElement = properType(getPriceOfElement(input));
    if (itemCounter < Number(ev.target.value)) {
      sum += priceOfElement;
      sumOfEverythingInStore.innerText = `${sum} zł`;
      itemCounter++;
    } else {
      sum -= priceOfElement;
      sumOfEverythingInStore.innerText = `${sum} zł`;
      itemCounter--;
    }
  });

  el.querySelector(".pl-4").addEventListener("click", ev => {
    ///////////////////////////////////////
    ////////////// HAVE TO NICLY CHANGE IT
    const reduceAfterThrowAway =
      properType(
        getPriceOfElement(
          el.querySelector(".pl-4").previousElementSibling
            .previousElementSibling.children[0]
        )
      ) *
      el.querySelector(".pl-4").previousElementSibling.previousElementSibling
        .children[0].value;
    //////////////////////////////////////
    sum -= reduceAfterThrowAway;
    sumOfEverythingInStore.innerText = `${sum} zł`;
    el.parentElement.removeChild(el);
  });
});

function getPriceOfElement(el) {
  return el.parentElement.nextElementSibling.innerText.split("");
}

function properType(el) {
  let val = el;
  val = val.slice(0, val.indexOf(" "));
  return Number(val.join(""));
}
