// 11. The "Name Extractor" (Objects + Map)

//     Description: Given an array of user objects [{name: "Alice", age: 20}, {name: "Bob", age: 25}], extract just the names into a flat array: ["Alice", "Bob"].
//     V1 (Pure): Use only loops.
//     V2 (Native): Use .map().
//     V3 (The Flex): Use .reduce().

// V1

function nameEx(userObj) {
  // empty starter results array
  let results = [];
  //iterate through the userObj array
  for (let i = 0; i < userObj.length; i++) {
    // push all names to the results array
    results.push(userObj[i].name);
  }
  // return results
  return results;
}

// V2

function nameEx(userObj) {
  const result = userObj.map(function (user) {
    return user.name;
  });
  return result;
}
console.log(
  nameEx([
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
  ]),
);

// V3

function reduceName(userObj) {
  // using reduce we start with an empty acc array, cur will be each userObj
  const result = userObj.reduce(function (acc, cur) {
    // push each cur's name to acc
    acc.push(cur.name);
    return acc;
  }, []);
  // after all accs are built to result, return result
  return result;
}
console.log(
  reduceName([
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
  ]),
);
