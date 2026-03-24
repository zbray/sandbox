// 12. The "Active User Finder" (Objects + Filter)

//     Description: Given an array of user objects [{name: "Alice", active: true}, {name: "Bob", active: false}], return an array of only the objects where active is true.
//     V1 (Pure): Use only loops.
//     V2 (Native): Use .filter().
//     V3 (The Flex): Use .reduce().

// V1 loops

function activeUser(userArray) {
  // initialize a blank results array
  let results = [];
  for (let i = 0; i < userArray.length; i++) {
    // check for active=true and push name to results
    if (userArray[i].active) {
      results.push(userArray[i].name);
    }
  }
  return results;
}

console.log(
  activeUser([
    { name: "Alice", active: true },
    { name: "Bob", active: false },
  ]),
);

// V2 - filter()

// initialize the user inputted array
const userArray = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
];
// as the function iterates through userArray and assigns each element the "user" name
const result = userArray.filter(function (user) {
  // and returns to the result array only objects where the active key has a true value.
  return user.active;
});
console.log(result);

// V3 - reduce()

function activeUser(userArray) {
  const result = userArray.reduce(function (acc, cur) {
    if (cur.active) {
      acc.push(cur.name);
    }
    return acc;
  }, []);
  return result;
}
console.log(
  activeUser([
    { name: "Alice", active: true },
    { name: "Bob", active: false },
  ]),
);

// I hit a snag here by using the following:
//     if (userArray[i].active) {

// [i] was not defined - I should have used `cur` for `userArray[i]
// I learned that I should have used the callback's own parameters instead of trying index an undefined variable

// I also did not initially create an else statement for when the if statement is false and Bob returned undefined
// I learned that reduce always needs to return acc otherwise it becomes undefined, breaking the chain

// my first solve for the undefined if false bug was to have an else statement:
// if (cur.active) {
//   acc.push(cur.name);
//   return acc;
// } else {
//   return acc;
// }

// But since both the if and else statements held `return acc` I hoisted it outside the if to avoid repeating code
// if (cur.active) {
//   acc.push(cur.name);
// }
// return acc;
