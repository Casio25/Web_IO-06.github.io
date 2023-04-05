const tooltipContainer = document.querySelector("#tooltipContainer");
const inputForm = document.querySelector("#tooltipInput");
const inputButton = document.querySelector("#changeTooltip");

// додати обробник події на кнопку "Змінити підказку"
inputButton.addEventListener("click", () => {
  createTooltip(inputForm.value);
});

// функція для створення нової підказки
const createTooltip = (text) => {
  const newTooltip = document.createElement("div");
  newTooltip.classList.add("tooltip");
  newTooltip.innerText = text;
  tooltipContainer.appendChild(newTooltip);
};

// додати обробник події на елемент, до якого хочемо додати підказку
const myButton = document.querySelector("#myText");
myButton.addEventListener("mouseenter", () => {
  const tooltipText = tooltipContainer.lastChild.innerText;
  myButton.setAttribute("title", tooltipText);
});
myButton.addEventListener("mouseleave", () => {
  myButton.removeAttribute("title");
});