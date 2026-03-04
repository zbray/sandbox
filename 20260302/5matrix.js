// 5. The "Matrix Flipper" (2D Array Transpose)

//    Description: Take a square grid of numbers (an array of arrays) and flip it over its diagonal. The rows must become the columns, and the columns must become the rows.
//    Constraint: Pure nested loops only. Absolutely no .map().
//    Expected Output: ```javascript const grid = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// Output should be: // [ // [1, 4, 7], // [2, 5, 8], // [3, 6, 9] // ]

// After visualizing this (below)

// INPUT
// [1 2 3]
// [4 5 6]
// [7 8 9]

// OUTPUT
// [1 4 7]
// [2 5 8]
// [3 6 9]

// I notice the indexes are flipped. 2 (row 0, column 1) -> (row 1, column 0)
// so we need to grab and flip the indexes

// input will be the grid per description
function matrixFlipper(grid) {
  // quick escape test if nothing is passed.
  if (grid.length === 0) return [];

  // initialization
  let result = [];

  // pre-build empty rows that'll fit with input
  for (let i = 0; i < grid.length; i++) {
    result.push([]);
  }

  // we will iterate through the row until we reach the end, which will be the final column, or grid.length
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      result[col][row] = grid[row][col];
    }
  }
  return result;
}
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrixFlipper(grid));

// here I got tripped up a few times - i didn't originally create the rows so this was returning errors
// result[col][row] = grid[row][col];
//                        ^
// TypeError: Cannot set properties of undefined (setting '0')

// I fixed this by running a for loop outside the main inner/outer loop to push empty arrays to result based on the rows in the provided grid input
// I forgot to remove the result.push([]) I had in the outer loop that this fix handled so it didn't run right away but after fixing that it did work correctly.
