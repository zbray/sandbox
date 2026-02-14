//hint:
// manage 2 pointers that will not move one by one
// use while instead of for loop

// Output: [1, 2, 3, 4, 5, 6, 7, 8]

function combineSortedArrays(arr1, arr2) {
  let i = 0; // pointer for arr1
  let j = 0; // pointer for arr2
  let result = []; //empty array where result will go

  while (i < arr1.length && j < arr2.length) {
    // checks that both arrays have elements to compare
    if (arr1[i] < arr2[j]) {
      // if arr1 number is lower than arr2
      result.push(arr1[i]);
      // push arr1[i] to result
      // move i forward
      i++;
    } else {
      // if arr2's number is smaller
      result.push(arr2[j]);
      // push arr2[j] to result
      // move j forward
      j++;
    }
    // at this step whichever array is finished will skip its while loop so we need to grab leftovers from the other array.
  }

  // add leftovers from arr1
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  // add leftovers from arr2
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

console.log(combineSortedArrays(arr1, arr2));

// this was definitely the hardest of the three - I was getting to a place where all but one of them returned, 8 was missing from the result. I learned that my top-level while statement wasn't handling leftovers. After checking for leftovers it returned the correct result.
