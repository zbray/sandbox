<!-- 1. The "Echo" (Custom Repeat)

    Description: Write a function that takes a string and a number n, and returns a new string repeated n times.
    Forbidden: String.prototype.repeat() or .join().
    Expected Output: echo("ha", 3) -> "hahaha" -->

<!-- 2. The "Chunker" (Array Grouping)

    Description: Write a function that takes an array and a size, and splits the array into multiple arrays of that size.
    Forbidden: .slice(), .splice().
    Expected Output: chunk([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]] -->

<!-- 3. The "Anagram Checker"

   Description: Given two words, check if they contain the exact same letters in the exact same quantities.
   Forbidden: .sort(), .split(). (He must manually count the letters using an Object or Map).
   Expected Output: isAnagram("listen", "silent") -> true -->

<!-- 4. The "Compressor" (Run-Length Encoding)

    Description: Write a function that takes a string of letters and "compresses" it by counting consecutive identical characters.
    Constraint: Pure loops only (for or while). No Regex, no .match(), no .split().
    Expected Output: compress("aaabbcaaa") -> "3a2b1c3a"
    Logic Concept: This tests state tracking. He needs to keep track of a "current character" and a "counter". As he loops through the string, if the next character is the same, increase the counter. If it is different, push the count and the character to a new string, then reset the counter for the new character.
    Mentor Hint: "What happens when you reach the very last letter? How do you make sure that final count gets added to your result?" -->

<!-- 5. The "Matrix Flipper" (2D Array Transpose)

   Description: Take a square grid of numbers (an array of arrays) and flip it over its diagonal. The rows must become the columns, and the columns must become the rows.
   Constraint: Pure nested loops only. Absolutely no .map().
   Expected Output: ```javascript const grid = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]; // Output should be: // [ // [1, 4, 7], // [2, 5, 8], // [3, 6, 9] // ] -->

6. The "Unique Sequence" (Sliding Window)

   Description: Given a string, find the length of the longest continuous substring that has no repeating characters.
   Forbidden: .split(), .includes(), .indexOf(), or Set.
   Expected Output: longestUnique("abcabcbb") -> 3 (for "abc"). longestUnique("pwwkew") -> 3 (for "wke").

7. The "Pascal's Generator" (Previous State Dependency)

   Description: Build a function that generates the first n rows of Pascal's Triangle as an array of arrays.
   Forbidden: Any array methods other than .push().
   Expected Output: generatePascal(4) -> [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
