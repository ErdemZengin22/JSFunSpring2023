let fullName = "Joe Washington"; // e.g.
let newLastName = "Fernandez"; // e.g.

/**
 * A person just got married and they need their last name replaced. You will change the value of "fullName" below. Replace the last name in "fullName" with "newLastName".
 *
 * @example
 * let fullName = "Emily Rose";
 * let newLastName = "Smith";
 * The new value for "fullName" should result in "Emily Smith".
 *
 * @example
 * let fullName = "Joe Washington";
 * let newLastName = "Fernandez";
 * The new value for "fullName" should result in "Joe Fernandez".
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let lastNameDetect = fullName.indexOf(" ");
let lastName = fullName.substring(lastNameDetect + 1);

let newFirstName = fullName.substring(0, lastNameDetect);

newLastName = lastName.replace(lastName, "Fernandez");
fullName = `${newFirstName} ${newLastName}`;

console.log(fullName);
