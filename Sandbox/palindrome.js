// using the split method on the array object we can split the characters of a word ("hello"), reverse them, join them back to a word "olleh" and compare them against the initial argument ("hello") and return true if so or false if not

// function palindromeCheck(word) {
//   return word === word.split("").reverse().join();
// }

// Without using reverse

function palindromeCheck(word) {
  // let's create a for loop to iterate through the word string with two pointers, one from the beginning and one from the end
  let j = word.length - 1;
  // this will initiate a tracker from the end of the word. word.length -1 points to the last character
  for (let i = 0; i < word.length / 2; i++) {
    // this will run through half the string as we are checking the characters one by one from the end and will stop in the middle.
    if (word[i] != word[j]) {
      return false;
      // this will return false if the pointer at i and j do not match characters
    }
    j--;
    // after each iteration this will move the right pointer one character to the left
  }
  return true;
  // if the loop completes and remains true it will return true
}

console.log(palindromeCheck("racecar"));
console.log(palindromeCheck("hello"));

// This one was a little difficult. I didn't put the empty string ('') in join() at first and it broke, returning false everytime until I figured out I needed the '' to have join combine the array elements themselves with no commas.
