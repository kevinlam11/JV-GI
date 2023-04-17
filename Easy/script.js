const name1 = "Kevin";
const name2 = "Kendrick";
const difference = name1.length - name2.length;

if (difference > 0) {
  console.log(
    `The name ${name1} is longer than ${name2} by ${difference} characters`
  );
} else if (difference < 0) {
  console.log(
    `The name ${name2} is longer than ${name1} by ${-difference} characters`
  );
} else {
  console.log(`The names ${name1} and ${name2} have the same length`);
}
