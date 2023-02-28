const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick() {
  const id = this.id;
  switch (id) {
    case "clear":
      display.innerText = "";
      break;
    case "backspace":
      display.innerText = display.innerText.slice(0, -1);
      break;
    case "equal":
      display.innerText = display.innerText ? eval(display.innerText) : "Empty!";
      break;
    default:
      display.innerText += id;
  }
}