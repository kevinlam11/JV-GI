const name1 = "JustinTheGoat";
const name2 = "OsielTheGoat";
const difference = name1.length - name2.length;

// If difference is greater than 0, then prompt this answer.
if (difference > 0) {
  console.log(
    `The name ${name1} is longer than ${name2} by ${difference} characters`
  );
  // If difference is less than 0, then prompt this answer.
} else if (difference < 0) {
  console.log(
    `The name ${name2} is longer than ${name1} by ${-difference} characters`
  );
  // If difference is neither, then(else) prompt this answer.
} else {
  console.log(`The names ${name1} and ${name2} have the same length`);
}
// Type node script.js in terminal for answer