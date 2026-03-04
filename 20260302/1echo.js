// 1. The "Echo" (Custom Repeat)

//     Description: Write a function that takes a string and a number n, and
//     returns a new string repeated n times.
//     Forbidden: String.prototype.repeat() or .join().
//     Expected Output: echo("ha", 3) -> "hahaha"

function echo(str, n) {
  // per the expected output this is how the user is going to interact with this
  let result = "";
  // starting with a blank string here to be filled with the generated echo
  for (let i = 0; i < n; i++) {
    // here we are iterating through str n times
    result += str;
    // and adding str to the result string
  }
  return result;
}
