// 9. The "Bouncer" (Focus: Filter)

//    Description: Given an array of ages [15, 22, 17, 30, 12], return an array of only the ages 18 and over.
//    V1 (Pure): Use only for/while loops and if statements.
//    V2 (Native): Use .filter().
//    V3 (The Flex): Achieve the exact same result using .reduce().

// V1

function bouncer(ages) {
  // initialize a blank results array to store ages that are 18 and over
  let results = [];
  // loop through the ages array
  for (let i = 0; i < ages.length; i++) {
    // push all ages 18 and above to results
    if (ages[i] >= 18) {
      results.push(ages[i]);
    }
  }
  return results;
}

bouncer([15, 22, 17, 30, 12]);
console.log(bouncer([15, 22, 17, 30, 12])); // [22, 30]

// V2

// filter through age and return only those with age that are 18 or above
function bouncer(ages) {
  let results = [];
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 18) {
      results.push(ages[i]);
    }
  }
  return results;
}

bouncer([15, 22, 17, 30, 12]);
console.log(bouncer([15, 22, 17, 30, 12])); // [22, 30]

// V2.1

// arrow function refactor
function bouncer(ages) {
  return ages.filter((age) => age >= 18);
}

console.log(bouncer([15, 22, 17, 18, 30, 12]));

// V3

//initialize input array of ages
const ages = [15, 22, 17, 30, 12];

// reduce method to loop through input and build an array of all current elements that are 18 or above
const result = ages.reduce(function (acc, cur) {
  if (cur >= 18) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(result);
