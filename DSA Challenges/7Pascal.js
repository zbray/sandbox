// 7. The "Pascal's Generator" (Previous State Dependency)

//    Description: Build a function that generates the first n rows of Pascal's Triangle as an array of arrays.
//    Forbidden: Any array methods other than .push().
//    Expected Output: generatePascal(4) -> [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]

function generatePascal(n) {
  // initialize result as an array of arrays. the top row will always be 1 in a pascal pyramid
  let result = [[1]];

  // using a for loop we will generate a newRow that will always start with row 2 and then continue generating rows per user's input of n
  for (let i = 2; i <= n; i++) {
    // prevRow is initalized and defined as the last "row" (array) in the result array
    let prevRow = result[result.length - 1];
    // we start a newRow with a 1 since every row starts with a 1
    let newRow = [1];
    // the inner loop runs through the pairs in the previous row
    for (let j = 1; j < prevRow.length; j++) {
      // this is the meat of the function, it performs the addition of the two numbers "above" the new number in the pyramid
      // it pushes the result of that addition to newRow, one by one.
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }
    // every row in a Pascal Pyramid ends with a 1
    newRow.push(1);
    //here the newRow array is pushed to result, will append after the current array of arrays that make up result
    result.push(newRow);
  }
  return result;
}
console.log(generatePascal(4));
