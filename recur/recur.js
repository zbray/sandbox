// arr = [4, 5, 20, 1, 3, 2];
// list.sort();
// console.log(list);

// function quick_sort(arr){
//   if (arr.length <=1) {
//     return arr
//   } else if
// }

This;
function bubbleSort(arr) {
  const n = arr.length;
  // outer loop ensures we pass through each element in the array
  for (let i = 0; i < n - 1; i++)
    // inner loop performs the comparisons between adjacent elements
    for (let j = 0; j < n - 1 - i; j++) {
      //checks if current element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        // swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  return arr;
}
const unsortedArray = [5, 1, 4, 2, 8];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 4, 5, 8]
