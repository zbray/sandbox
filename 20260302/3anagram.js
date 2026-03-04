// 3. The "Anagram Checker"

//     Description: Given two words, check if they contain the exact same
// letters in the exact same quantities.
//     Forbidden: .sort(), .split(). (He must manually count the letters
// using an Object or Map).
//     Expected Output: isAnagram("listen", "silent") -> true

// create a function that takes in two words as arguments
function isAna(word1, word2) {
  // quick check on word lengths, will return false if they don't match
  if (word1.length !== word2.length) {
    return false;
  }

  // create two Objects that will act as our counters
  let firstObject = {};
  let secondObject = {};

  // create a for loop that iterates through the first word
  for (let i = 0; i < word1.length; i++) {
    // and checks for new letters, assigning them a counter of 1;
    if (firstObject[word1[i]] === undefined) {
      firstObject[word1[i]] = 1;

      // or adds to the current count if the letter already exists
    } else {
      firstObject[word1[i]] += 1;
    }
  }

  // same thing for word 2
  for (let j = 0; j < word2.length; j++) {
    if (secondObject[word2[j]] === undefined) {
      secondObject[word2[j]] = 1;
    } else {
      secondObject[word2[j]] += 1;
    }
  }
  // this is where I reached out to an AI to help
  // gemini suggested using a for...in loop to loop through the objects I created

  // I didn't know how the for...in loop checked and asked if the loop would catch things even if they weren't in the same order ("listen", "silent")

  // That is a fantastic question! The short answer is: Yes, the for...in loop will still catch it perfectly.

  // In JavaScript, objects don't really care about the "order" of their keys when you are looking things up. Think of an object like a locker room rather than a waiting line:
  // A Waiting Line (Array): If you want to find the 3rd person, you have to count from the front. If people swap places, the order is ruined.
  // A Locker Room (Object): Every person has a specific locker labeled with their name. It doesn't matter if "Locker A" is physically next to "Locker Z" or across the room;
  // if you have the key labeled "A," you go straight to that locker and see what's inside.

  // for...in loop to check every key
  for (let key in firstObject) {
    // if it finds a key that doesn't match, return false
    // this checks if the ltter exists in both but the count is different and if the letter doesn't exist at all in the second word (would return undefined if 1 instance of x was checked against undefined instances of x)
    if (firstObject[key] !== secondObject[key]) {
      return false;
    }
  }

  //if it runs through the loop without returning false, return true
  return true;
}

// Gemini suggested a refined version of the checks for character counts
// it suggested a single line version that works the same way as my 5 line checks:

// my code
// if (firstObject[word1[i]] === undefined) {
//   firstObject[word1[i]] = 1;
// } else {
//   firstObject[word1[i]] += 1;
// }

// suggested:
// firstObject[char] = (firstObject[char] || 0) + 1;

// How it works:
// In JavaScript, || (OR) returns the first "truthy" value it finds.
//     If firstObject[char] is undefined (which is "falsy"), the code ignores it and uses 0. Then it adds 1.
//     If firstObject[char] is already 1, it uses that 1 and adds another 1 to get 2.

// it also suggested let char = word1[i];  for ease of readibility so that we're not using word1[i] several times.
