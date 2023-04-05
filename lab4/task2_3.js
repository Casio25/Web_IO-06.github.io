const tooltipContainer = document.querySelector("#tooltipContainer");
const inputForm = document.querySelector("#tooltipInput");
const inputButton = document.querySelector("#changeTooltip");

inputButton.addEventListener("click", () => {
  createTooltip(inputForm.value);
});

const createTooltip = (text) => {
  const newTooltip = document.createElement("div");
  newTooltip.classList.add("tooltip");
  newTooltip.innerText = text;
  tooltipContainer.appendChild(newTooltip);
};

const myButton = document.querySelector("#myText");
myButton.addEventListener("mouseenter", () => {
  const tooltipText = tooltipContainer.lastChild.innerText;
  myButton.setAttribute("title", tooltipText);
});
myButton.addEventListener("mouseleave", () => {
  myButton.removeAttribute("title");
});