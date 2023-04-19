// FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
// Prompts/Input
const num1 = parseFloat(prompt("Give a number:"));
const operator = prompt("(+, -, *, /):");
const num2 = parseFloat(prompt("Give another number:"));

// SOLUTION SOLUTION SOLUTION SOLUTION SOLUTION SOLUTION SOLUTION SOLUTION
let result;
if (operator === "+") {
  result = add(num1, num2);
} else if (operator === "-") {
  result = subtract(num1, num2);
} else if (operator === "*") {
  result = multiply(num1, num2);
} else if (operator === "/") {
  result = divide(num1, num2);
} else {
  console.log("Invalid operator");
}

// Output
console.log(`${num1} ${operator} ${num2} = ${result}`);
// OPEN IN BROWSER AND COMPLETE PROMPTS THEN LOOK AT CONSOLE FOR ANSWER.
