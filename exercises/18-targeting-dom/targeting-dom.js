/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  const firstLi = document.querySelector("li");
  const warningBackground = document.querySelectorAll(".bg-warning");
  const targetMe = document.querySelector(".target");
  const socialButtons = document.querySelectorAll(".socialMediaButton");
  const greenRow = document.querySelector("#myRow .col");
  console.log(firstLi);
  console.log(warningBackground);
  console.log(targetMe);
  console.log(socialButtons);
  console.log(greenRow);
})();
