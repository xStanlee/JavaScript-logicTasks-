// Import stylesheets
import "./style.css";

const btnPrev = document.querySelector("#btn_prev");
const btnNext = document.querySelector("#btn_next");

let stageState = 1;

btnPrev.addEventListener("click", () => {
  stageState--;
  stageState = validationPrevBtn(stageState);
  chooseState(stageState);
});

btnNext.addEventListener("click", () => {
  stageState++;
  stageState = validationNextBtn(stageState);
  chooseState(stageState);
});

chooseState(stageState);

function chooseState(currState) {
  switch (currState) {
    case 1:
      disableBtnView(btnPrev);
      unfillBall(currState + 1);
      setWire(currState);
      showNumber(currState);
      break;
    case 2:
      enableBtnView(btnPrev);
      unfillBall(currState + 1);
      fillBall(currState);
      setWire(currState);
      hideNumber(currState);
      showNumber(currState);
      break;
    case 3:
      enableBtnView(btnNext);
      unfillBall(currState + 1);
      fillBall(currState);
      setWire(currState);
      hideNumber(currState);
      showNumber(currState);
      break;
    case 4:
      disableBtnView(btnNext);
      fillBall(currState);
      setWire(currState);
      hideNumber(currState);
      break;
  }
}

function validationPrevBtn(currState) {
  return currState < 1 ? (currState = 1) : currState;
}

function validationNextBtn(currState) {
  return currState > 4 ? (currState = 4) : currState;
}

function disableBtnView(btn) {
  btn.style.visibility = "hidden";
}

function enableBtnView(btn) {
  btn.style.visibility = "visible";
}

function unfillBall(nextBall) {
  const ball = document.querySelector(`#ball-${nextBall}`);
  setRightClasses(ball);

  function setRightClasses(el) {
    el.classList.remove("bg-green");
    el.classList.add("bg-white");
    el.classList.add("border-2");
    el.classList.add("border-grey-light");
  }
}

function fillBall(currBall) {
  const ball = document.querySelector(`#ball-${currBall}`);
  setRightClasses(ball);

  function setRightClasses(el) {
    el.classList.remove("bg-white");
    el.classList.remove("border-2");
    el.classList.remove("border-grey-light");
    el.classList.add("bg-green");
  }
}

function setWire(currWire) {
  if (currWire === 4) {
    const prevWire = document.querySelector(`#wire-${currWire - 1}`);
    prevWire.style.width = "100%";
    return;
  }
  const wire = document.querySelector(`#wire-${currWire}`);
  wire.style.width = "25%";
  if (currWire > 1) {
    const prevWire = document.querySelector(`#wire-${currWire - 1}`);
    prevWire.style.width = "100%";
  }
}

function hideNumber(elPostfix) {
  const el = document.querySelector(`#ball-${elPostfix}`);
  const child = el.querySelector("span");
  child.innerText = "";
}

function showNumber(elPostfix) {
  const el = document.querySelector(`#ball-${elPostfix + 1}`);
  const child = el.querySelector("span");
  child.innerText = elPostfix + 1;
}
