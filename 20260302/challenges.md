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

<!-- 6. The "Unique Sequence" (Sliding Window)

   Description: Given a string, find the length of the longest continuous substring that has no repeating characters.
   Forbidden: .split(), .includes(), .indexOf(), or Set.
   Expected Output: longestUnique("abcabcbb") -> 3 (for "abc"). longestUnique("pwwkew") -> 3 (for "wke"). -->

<!-- 7. The "Pascal's Generator" (Previous State Dependency)

   Description: Build a function that generates the first n rows of Pascal's Triangle as an array of arrays.
   Forbidden: Any array methods other than .push().
   Expected Output: generatePascal(4) -> [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]] -->

<!---->
<!---->
<!-- ROUND 2 -->
<!---->
<!---->

<!-- 8. The "Tax Calculator" (Focus: Map)

   Description: Take an array of prices and add a 10% tax to each one.
   V1 (Pure): Use only for/while loops and .push().
   V2 (Native): Use .map().
   V3 (The Flex): Achieve the exact same result using .reduce(). -->

<!-- 9. The "Bouncer" (Focus: Filter)

   Description: Given an array of ages [15, 22, 17, 30, 12], return an array of only the ages 18 and over.
   V1 (Pure): Use only for/while loops and if statements.
   V2 (Native): Use .filter().
   V3 (The Flex): Achieve the exact same result using .reduce(). -->

<!-- 10. The "Cash Register" (Focus: Reduce)

    Description: Calculate the total sum of an array of numbers.
    V1 (Pure): Use only loops and a let total = 0 variable.
    V2 (Native): Use .reduce(). -->

<!-- 11. The "Name Extractor" (Objects + Map)

    Description: Given an array of user objects [{name: "Alice", age: 20}, {name: "Bob", age: 25}], extract just the names into a flat array: ["Alice", "Bob"].
    V1 (Pure): Use only loops.
    V2 (Native): Use .map().
    V3 (The Flex): Use .reduce(). -->

<!-- 12. The "Active User Finder" (Objects + Filter)

    Description: Given an array of user objects [{name: "Alice", active: true}, {name: "Bob", active: false}], return an array of only the objects where active is true.
    V1 (Pure): Use only loops.
    V2 (Native): Use .filter().
    V3 (The Flex): Use .reduce(). -->

13. The "VIP Guest List" (The Filter-Map Combo)

    Description: You have an array of guest objects [{name: "john", age: 17, vip: true}, {name: "sarah", age: 22, vip: true}, {name: "mike", age: 25, vip: false}]. You need an array of just the capitalized names of VIPs who are 18 or older.
    V1 (Pure): Use for loops, if statements, and .push().
    V2 (Native): Chain .filter().map(). (Point out that this loops through the array twice).
    V3 (The Flex): Use a single .reduce() to filter and map in one single pass (O(N) time).

14. The "Deep Grade Analyzer" (Flattening & Math)

    Description: Given an array of classes, each containing an array of student objects with their grades, find the overall average grade of all students combined.

JavaScript

const classes = [
[{ name: "Ali", grade: 80 }, { name: "Bia", grade: 90 }],
[{ name: "Cid", grade: 70 }]
]; // Total grades: 240. Total students: 3. Average: 80.

    V1 (Pure): Nested for loops tracking a sum and a count.
    V2 (Native): .flatMap() to combine the arrays, then .map() to get the grades, then .reduce() to sum them.
    V3 (The Flex): A single, highly complex .reduce() that flattens, extracts, and sums all at once.
