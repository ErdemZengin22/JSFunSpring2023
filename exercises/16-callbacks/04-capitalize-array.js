// e.g.
const capitalizeString = (str) => {
  return str.toUpperCase();
};
/**
 * "capitalizeArray" should capitalize all letters within an array of strings.
 *
 * Here is what you need to do:
 * - Inside the capitalizeArray function, create an empty array called "result".
 * - Loop through each string in the "originalArray" array using a for loop.
 * - In the loop, call the callback function with the current string as its argument.
 * This should return the capitalized version of the string.
 * - Store the capitalized string in a variable called "capitalizedStr".
 * - Add "capitalizedStr" to the "result" array.
 * - After the loop, return the "result" array, which should now contain the capitalized strings.
 *
 * @example
 * const capitalizeString = (str) => str.toUpperCase();
 * const result = capitalizeArray(['hello', 'world'], capitalizeString); // ['HELLO', 'WORLD']
 */
const capitalizeArray = (originalArray, callback) => {
  // WRITE YOUR ANSWER IN HERE
  const result = [];// create an empty array called "result".
  for (let i = 0; i < originalArray.length; i++){//Loop through each string in the "originalArray" array using a for loop.
    const capitalizedStr = callback(originalArray[i]);//Store the capitalized string in a variable called "capitalizedStr" using callback function.
    result.push(capitalizedStr);//Add "capitalizedStr" to the "result" array.
  }
  return result;//After the loop, return the "result" array, which should now contain the capitalized strings.
};

// Uncomment me to test your answer in Quokka
 const result = capitalizeArray(['erdem', 'Zengin'], capitalizeString);
console.log(result)
// IGNORE THIS BELOW. It is for the tests.

export { capitalizeArray };
