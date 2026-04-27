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

<!-- 13. The "VIP Guest List" (The Filter-Map Combo)

    Description: You have an array of guest objects [{name: "john", age: 17, vip: true}, {name: "sarah", age: 22, vip: true}, {name: "mike", age: 25, vip: false}]. You need an array of just the capitalized names of VIPs who are 18 or older.
    V1 (Pure): Use for loops, if statements, and .push().
    V2 (Native): Chain .filter().map(). (Point out that this loops through the array twice).
    V3 (The Flex): Use a single .reduce() to filter and map in one single pass (O(N) time). -->

<!-- 14. The "Deep Grade Analyzer" (Flattening & Math)

    Description: Given an array of classes, each containing an array of student objects with their grades, find the overall average grade of all students combined.

JavaScript

const classes = [
[{ name: "Ali", grade: 80 }, { name: "Bia", grade: 90 }],
[{ name: "Cid", grade: 70 }]
]; // Total grades: 240. Total students: 3. Average: 80.

    V1 (Pure): Nested for loops tracking a sum and a count.
    V2 (Native): .flatMap() to combine the arrays, then .map() to get the grades, then .reduce() to sum them.
    V3 (The Flex): A single, highly complex .reduce() that flattens, extracts, and sums all at once. -->


<!-- 15. The "Tree Builder" (Flat to Hierarchical)

    Description: Databases return "flat" data, but UI components (like dropdown menus or comment threads) need "nested" trees. Take a flat array of categories and build a nested object tree.

The Input:

const flat = [
  { id: 1, name: "Electronics", parentId: null },
  { id: 2, name: "Computers", parentId: 1 },
  { id: 3, name: "Laptops", parentId: 2 },
  { id: 4, name: "Books", parentId: null }
];

    Expected Output: An object or array where "Computers" is nested inside the children array of "Electronics", and "Laptops" is inside "Computers".
    Logic Concept: This tests object references and Hash Maps. If he tries to solve this with raw nested loops, it will be a nightmare. He needs to learn to create a "Lookup Map" (an object mapping IDs to the items) to assemble the tree efficiently. -->


<!-- 16. The "Data Table Controller" (Pagination & Sorting)

    Description: Write a function getTableData(data, sortBy, sortOrder, page, pageSize) that takes a massive array of user objects and returns only the specific slice of data the user is looking at.
    Example Call: getTableData(users, "age", "desc", 2, 10) (This should sort the users by age descending, skip the first 10, and return the next 10).
    Logic Concept: This is the ultimate pipeline. He must handle missing arguments (defaults), sort the data dynamically based on object keys, and then use math ((page - 1) * pageSize) to slice the array properly. -->

<!-- 17. The "Calendar Scheduler" (Merging Intervals)

Description: You are building a calendar app. A user has a messy list of meetings for the day, and some of them overlap. You need to write a function that merges all overlapping meetings into solid blocks of "busy" time.

The Input: An array of time pairs [startTime, endTime].

const meetings = [[1, 3], [2, 6], [8, 10], [15, 18]];

Expected Output: [[1, 6], [8, 10], [15, 18]] (Because the 1-3 and 2-6 meetings overlap, they become a single 1-6 block).

Logic Concept: This is a classic whiteboard problem. He first needs to sort the array by the start times. Then, he can iterate through them, keeping track of the "currently active" meeting. If the next meeting starts before the current one ends, he updates the end time. If not, he pushes the current meeting to his result and starts tracking the next one. -->

18. The "Version Manager" (Semantic Sorting)

Description: You are building a software updater. You receive a list of version numbers as strings, and you need to sort them from oldest to newest.

The Catch: Standard JavaScript string sorting will fail here, because alphabetically, "1.10.0" comes before "1.2.0".

The Input:

const versions = ["1.1.2", "1.10.0", "1.2.0", "2.0.1", "0.9.9"];


Expected Output: ["0.9.9", "1.1.2", "1.2.0", "1.10.0", "2.0.1"]

Logic Concept: He has to split the strings by the period (.split('.')), convert the chunks into numbers, and write a custom comparison function for .sort(). He must compare the "Major" version first; if they are a tie, compare the "Minor" version; if they are a tie, compare the "Patch" version.

19. The "E-Commerce Engine" (Advanced State Management)

    Description: A user is clicking around a shopping cart quickly. You receive an array of "actions" they took. You need to process these actions in order, consolidate duplicate items, handle removals, apply a store-wide discount, and return the final checkout object.
    The Input:

const actions = [
  { type: "add", item: "laptop", price: 1000, qty: 1 },
  { type: "add", item: "mouse", price: 50, qty: 1 },
  { type: "add", item: "laptop", price: 1000, qty: 1 },
  { type: "remove", item: "mouse", qty: 1 },
  { type: "add", item: "keyboard", price: 100, qty: 2 }
];
const discountPercent = 10; // 10% off the total

    Expected Output:

{
  cart: { laptop: 2, keyboard: 2 },
  finalTotal: 1980 // (2 laptops + 2 keyboards) = 2200 - 10% discount
}

    Logic Concept: This is the ultimate test of everything he has learned. He will likely need to use .reduce() (or a very well-managed for loop and an external object) to build the cart state step-by-step. He has to handle the logic of removing an item completely if its quantity hits 0, and then do a final math calculation on the result.


20. The "University Registrar" (Deep Aggregation & Data Cleaning)
Goal: Test his patience, organizational skills, and ability to track scope through deeply nested structures. He will need to clean data, perform math, and restructure the output entirely. Constraint: None. He can use any built-in methods.
The Description: "You are building a reporting dashboard for a University. You receive a deeply nested array of departments, courses, and students. However, the data is messy. Students missed tests, some scores were recorded as strings, and some are just missing.
Your task is to build a comprehensive report that calculates:

    Every individual student's average (ignoring invalid/missing scores).
    The average score for each course.
    The average score for each department.
    The overall university average.
    The name and score of the single top-performing student in the whole university."

The Input:

const universityData = [
  {
    department: "Engineering",
    courses: [
      {
        courseName: "Calculus",
        students: [
          { id: "e1", name: "Alice", scores: [80, 90, 85] },
          { id: "e2", name: "Bob", scores: [70, null, "absent", 75] } // Needs cleaning
        ]
      },
      {
        courseName: "Physics",
        students: [
          { id: "e3", name: "Charlie", scores: [90, "95", 92] } // String needs parsing
        ]
      }
    ]
  },
  {
    department: "Arts",
    courses: [
      {
        courseName: "History",
        students: [
          { id: "a1", name: "Diana", scores: [88, 82, 85] },
          { id: "a2", name: "Evan", scores: [] } // Edge case: No scores
        ]
      }
    ]
  }
];

The Expected Output:

{
  universityAverage: 85.3, // (Or whatever the exact math comes out to)
  topStudent: { name: "Charlie", average: 92.3 },
  departments: {
    "Engineering": {
      departmentAverage: 84.5,
      courses: {
        "Calculus": 80.0,
        "Physics": 92.3
      }
    },
    "Arts": {
      departmentAverage: 85.0,
      courses: {
        "History": 85.0
      }
    }
  }
}

Logic Concept: This is laborious because it requires a multi-step pipeline. If he tries to do this in one giant nested loop, he will get completely lost.

Step 1: He needs to learn to write helper functions (e.g., calculateCleanAverage(scoresArray) that filters out nulls/words, converts strings to numbers, and returns the average).
Step 2: He has to traverse the tree from the bottom up. Calculate student averages first, push those up to calculate course averages, push those up for department averages, etc.
Step 3: He has to completely flip the structure from arrays into nested objects based on keys.


21. The "Global Financial Reconciliation" (The Ultimate Pipeline)
Goal: Simulate a real-world, extremely messy data integration task. He must build a pipeline that cleans inconsistent data types, normalizes currencies, parses dates, and aggregates metrics across multiple dimensions. Constraint: None. He should heavily rely on built-in methods and is strongly encouraged to write separate helper functions (e.g., parsePrice(), normalizeDate()) rather than doing it all in one massive block.

The Description: "You are tasked with generating an end-of-quarter financial report for a global e-commerce marketplace. You are given a massive log of raw transactions, but the data comes from different regional servers, meaning the formatting is a complete disaster.

You also have an exchangeRates object. Your task is to process this raw data and generate a perfectly structured JSON report in a single base currency (USD)."

The Business Rules (The Mentee MUST follow these):

1. Status: Only calculate revenue for transactions where the status is exactly "COMPLETED" (case-insensitive). Ignore "failed", "pending", or "refunded".
2. Quantities: If qty is missing (null or undefined), assume it is 1. If it's a string ("3"), convert it to a number.
3. Currencies: Prices are a mess.
    If it's a raw number (e.g., 25.5), assume it's USD.
    If it's a string, it contains a symbol ($, €, £, ¥). You must strip the symbol, convert the string to a number (watch out for European comma decimals like "20,50" which means 20.50), and multiply it by the provided exchange rate to get the USD value.
4. Dates: Dates come in multiple formats (YYYY-MM-DD, MM/DD/YYYY, or full ISO strings). You must extract just the Year and Month to group revenue by month (e.g., "2023-01").

The Input Data:

const exchangeRates = { EUR: 1.10, GBP: 1.30, JPY: 0.007, USD: 1 };

const rawTransactions = [
      { tId: "T1", user: "u01", product: "Laptop", qty: 2, price: "$1000.00", status: "COMPLETED", date: "2023-01-15" },
      { tId: "T2", user: "u02", product: "Mouse", qty: null, price: "€20,00", status: "completed", date: "01/16/2023" }, 
      { tId: "T3", user: "u01", product: "Laptop", qty: 1, price: "$1000.00", status: "REFUNDED", date: "2023-01-20" }, 
      { tId: "T4", user: "u03", product: "Keyboard", qty: 5, price: "£40.50", status: "Failed", date: "2023-02-05" },
      { tId: "T5", user: "u02", product: "Monitor", qty: "3", price: "¥15000", status: "COMPLETED", date: "2023-02-10T08:00:00Z" }, 
      { tId: "T6", user: "u04", product: "Mouse", qty: 1, price: 25.00, status: "COMPLETED", date: "2023-03-01" } 
    ];

The Expected Output: He needs to transform that mess into this exact analytical structure:

    {
      totalGrossRevenueUSD: 2362.00, // Sum of all valid transactions in USD
      topSpender: "u01", // User ID who spent the most total money
      bestSellingProduct: "Laptop", // Product with the highest total quantity sold
      revenueByMonth: {
        "2023-01": 2022.00, // (2 Laptops @ $1000) + (1 Mouse @ €20 * 1.10)
        "2023-02": 315.00,  // (3 Monitors @ ¥15000 * 0.007)
        "2023-03": 25.00    // (1 Mouse @ 25 USD)
      },
      userMetrics: {
        "u01": { totalSpentUSD: 2000.00, itemsBought: 2 },
        "u02": { totalSpentUSD: 337.00, itemsBought: 4 },
        "u04": { totalSpentUSD: 25.00, itemsBought: 1 }
      }
    }