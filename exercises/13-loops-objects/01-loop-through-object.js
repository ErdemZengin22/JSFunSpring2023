const links = {
  Dogs: "http://www.omfgdogs.com",
  Kittens: "https://giphy.com/search/kitten",
  "Hamster Dance": "https://hamster.dance/hamsterdance/",
};

/**
 * Create an variable called "html".
 * Loop through all properties within the "links" object
 * and set "html" to a list of HTML links.
 *
 * @example
 * console.log(html);
 * // <a href="http://www.omfgdogs.com">Dogs</a><a href="https://giphy.com/search/kitten">Kittens</a><a href="https://hamster.dance/hamsterdance/">Hamster Dance</a>
 *
 * Your answer should still work when "links" has different keys and values.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
console.log(links);
let html = ""; //Create an variable called "html".
for (let linkKeys in links){//Loop through all properties within the "links" object
  console.log(linkKeys);
  console.log(links[linkKeys]);
html += `<a href="${links[linkKeys]}">${linkKeys}</a>`//and set "html" to a list of HTML links.
}
console.log(html);