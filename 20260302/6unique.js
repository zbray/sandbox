// 6. The "Unique Sequence" (Sliding Window)

//    Description: Given a string, find the length of the longest continuous substring that has no repeating characters.
//    Forbidden: .split(), .includes(), .indexOf(), or Set.
//    Expected Output: longestUnique("abcabcbb") -> 3 (for "abc"). longestUnique("pwwkew") -> 3 (for "wke").

function longestUnique(str) {
  //initialize a left pointer, right pointer, charMap object, and max counter to track the max size of substrings
  let left = 0;
  let right = 0;
  let charMap = {};
  let maxLength = 0;

  // outerloop will control movement of right pointer to end of string
  while (right < str.length) {
    // here I just wanted to make sure the pointer was working. str[right] will return the character in 'str' at position 'right'
    // console.log(right, str[right]);

    // now we need an if/else to check if charMap already includes the current value of str[right]str[right] is already in charMap and to add it if not
    if (charMap[str[right]]) {
      // when we find a duplicate we need to slide the left side of our window over 1 index
      // we also need to delete the first of the repeated characters (stored at str[left]) from the charmap so it may discover it for the first time if it sees it as the right side of the window moves
      delete charMap[str[left]];
      left++;
    } else {
      // when we see a new character
      // we need to update maxLength to be the larger of the two between our window's length and the current maxLength value
      maxLength = Math.max(maxLength, right - left + 1);
      // we need to store this new character into charMap for the next iteration
      charMap[str[right]] = true;
      right++;
    }
    // return maxLength;
  }
  return maxLength;
}
longestUnique("pwwkew");
console.log(longestUnique("pwwkew"));

// Explanation: 
// This sliding window checks for the longest substring with non-repeating characters. As the right pointer moves through the input and finds new characters, it updates maxLength with the current window size. When it finds a duplicate, the left side of the window moves one character to the right until the duplicate is gone, then continues.

// This was tough. I watched a few short videos explaining this algorithm (albeit without the forbidden rules here) until I got a sense of the logic