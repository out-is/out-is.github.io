const form = document.querySelector("#form");
const input = document.querySelector("#bet");
const chose = document.querySelector("#chose");
const choose = document.querySelector("#choose");
const result = document.querySelector("#result");
const HIDDEN_CLASSNAME = "hidden";

function onSubmit(event) {
  event.preventDefault();
  const value = parseInt(input.value, 10);
  const random = Math.floor(Math.random() * (value + 1));
  choose.classList.remove(HIDDEN_CLASSNAME);
  const chosevalue = parseInt(chose.value, 10);
  choose.innerText = `You chose: ${chosevalue}, the machine chose ${random}.`;
  result.classList.remove(HIDDEN_CLASSNAME);
  if (chosevalue === random) {
    result.innerText = "You Won!";
  } else {
    result.innerText = "You lost!";
  }
}

form.addEventListener("submit", onSubmit);
