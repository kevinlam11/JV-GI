// If else statement that prompts user to type letters. If strictly uppercase, will log shout. If strictly lowercase, will log whisper. All else will log normal/neither
const input = prompt("Type something:");
if (input === input.toUpperCase()) {
  console.log("You are shouting!");
} else if (input === input.toLowerCase()) {
  console.log("You are whispering!");
} else {
  console.log("Refresh page and type in all caps or lowercase.");
}
// OPEN LIVE BROWSER AND TYPE PROMPT AND LOOK AT CONSOLE FOR ANSWER.
