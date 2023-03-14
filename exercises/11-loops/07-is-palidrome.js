let string = "racecar";

/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 *
 * Create a variable called "isPalindrome".
 * It should equal true if "string" is a palindrome
 * and false if it is not.
 *
 * Use the split and join methods to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

/* GOOGLED SOLUTION BUT NOT USING SPLIT AND JOIN.
    let reversedString = "";
    for (let i = string.length - 1;i >=0;i--){
        reversedString += string[i];
    };
    let isPalindrome = reversedString === string;
    if (isPalindrome) {
      console.log("Yeap, this is a palindrome.");
    } else {
      console.log("Nope, this is not a palindrome.");
    }
*/
let reversedString = string.split("").reverse().join("");
let isPalindrome = reversedString === string;
if (isPalindrome) {
console.log("Yeap, this is a palindrome.");
} else {
console.log("Nope, this is not a palindrome.");
}