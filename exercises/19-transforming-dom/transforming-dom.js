/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  const imgTag = document.querySelector("#brokenImg");
  const imgLink = document.querySelector("#brokenImgLink");
  const correctLink = document.querySelector("#correctLink").textContent;
  const linkToChange = document.querySelector("#linkToChange");
  const victoriousText = document.querySelector("#victor");
  const colorChange = document.querySelector("#colorChange");
  const secColorChange = document.querySelector("#secColorChange");
  const hideMe = document.querySelector("#hideMe");
  const reveal = document.querySelector(".hidden");
  const button = document.querySelector("button");
  const checkMarkDiv = document.querySelector(".myText");
  // 1
  brokenImg.src = imgLink.href;
  // 2
  linkToChange.href = correctLink;
  // 3
  victoriousText.textContent = "I am victorious!";
  // 4
  colorChange.style.backgroundColor = "#0070eb";
  colorChange.style.color = "#fff";
  // 5
  secColorChange.classList.remove("alert-danger");
  secColorChange.classList.add("alert-warning");
  // 6
  hideMe.style.display = "none";
  // 7
  reveal.classList.remove("hidden");
  // 8
  if (button.classList.contains("btn-primary")){
    checkMarkDiv.textContent = "blue";
  }
})();
