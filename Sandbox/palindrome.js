// using the split method on the array object we can split the characters of a word ("hello"), reverse them, join them back to a word "olleh" and compare them against the initial argument ("hello") and return true if so or false if not

function palindromeCheck(word) {
  return word === word.split("").reverse().join();
}

console.log(palindromeCheck("racecar"));
console.log(palindromeCheck("hello"));

// This one was a little difficult. I didn't put the empty string ('') in join() at first and it broke, returning false everytime until I figured out I needed the '' to have join combine the array elements themselves with no commas.
