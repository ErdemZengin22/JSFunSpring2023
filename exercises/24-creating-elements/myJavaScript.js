const body = document.querySelector("body");
const buttonArea = document.querySelector("#buttonArea");
const createButton = document.querySelector("#createButton");
const addCreateButton = document.querySelector("#addCreate");
const clearButton = document.querySelector(".clearButton");
const customText = document.querySelector("#customText");
const generatedButtons = [];
let count = 1;

const generateButton = () => {
  const newButton = document.createElement('button');
  newButton.textContent = `Extra Button ${count}`;
  newButton.classList.add("generatedButton");
  buttonArea.appendChild(newButton);;
  generatedButtons.push(newButton);
  count ++;
};
const clearButtons = () => {
  generatedButtons.forEach(button => {
    button.remove();
  });
  generatedButtons.length = 0;
  count = 1;
};
const addCustomButton = () => {
  if (customText.value.length > 0){
  const newButton = document.createElement('button');
  newButton.textContent = `${DOMPurify.sanitize(customText.value)}`;
  newButton.classList.add("generatedButton");
  buttonArea.appendChild(newButton);;
  generatedButtons.push(newButton);
  count ++;
  customText.value = "";
}else {
  alert('Text Field Empty!');
}
};
createButton.addEventListener("click", generateButton);
addCreateButton.addEventListener("click", addCustomButton);
clearButton.addEventListener("click", clearButtons);