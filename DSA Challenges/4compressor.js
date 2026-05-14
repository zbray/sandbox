// The "Compressor" (Run-Length Encoding)

// Description: Write a function that takes a string of letters
//   and "compresses" it by counting consecutive identical characters.
// Constraint: Pure loops only (for or while). No Regex, no .match(),
//   no .split().
// Expected Output: compress("aaabbcaaa") -> "3a2b1c3a"
// Logic Concept: This tests state tracking. He needs to keep track of
//    a "current character" and a "counter". As he loops through the string,
//    if the next character is the same, increase the counter. If it is
//   different, push the count and the character to a new string, then
//   reset the counter for the new character.
// Mentor Hint: "What happens when you reach the very last letter?
//   How do you make sure that final count gets added to your result?"

// declare currentChar as a blank string, count as a blank number, and result as blank string

function compressor(userString) {
  let currentChar = "";
  let count = 0;
  let result = "";

  // iterate through input checking if the current character matches the pointer [i] within the user string.
  // if they don't match, push the currentChar to result with counter 1
  for (let i = 0; i < userString.length; i++) {
    if (currentChar !== userString[i]) {
      result += count + currentChar;
      currentChar = userString[i];
      // then update the currentChar to the current pointer so we can increase this counter if the next character matches
      count = 1;
    } else {
      // if they do match, increase the counter by 1
      count += 1;
    }
  }
  // this will push the last currentChar/count pait to the result since the if statement doesn't do that itself
  result += count + currentChar;
  return result;
}

// this will allow the user to input whatever text they like in the terminal
// with node installed this is what the input will look like "node 4compressor.js "inputtext"

const userInput = process.argv[2];
console.log(compressor(userInput));
