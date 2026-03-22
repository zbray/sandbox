// 10. The "Cash Register" (Focus: Reduce)

//     Description: Calculate the total sum of an array of numbers.
//     V1 (Pure): Use only loops and a let total = 0 variable.
//     V2 (Native): Use .reduce().

// V1

function cash(inputArr) {
  total = 0;
  for (let i = 0; i < inputArr.length; i++) {
    // add each element in the inputArr to total
    total += inputArr[i];
  }
  return total;
}
console.log(cash([3, 17, 14, 25, 15]));

// V2

function cash(inputArr) {
  const result = inputArr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  return result;
}
console.log(cash([10, 20, 30, 40, 50]));
