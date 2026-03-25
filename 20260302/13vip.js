// 13. The "VIP Guest List" (The Filter-Map Combo)

//     Description: You have an array of guest objects [{name: "john", age: 17, vip: true}, {name: "sarah", age: 22, vip: true}, {name: "mike", age: 25, vip: false}]. You need an array of just the capitalized names of VIPs who are 18 or older.
//     V1 (Pure): Use for loops, if statements, and .push().
//     V2 (Native): Chain .filter().map(). (Point out that this loops through the array twice).
//     V3 (The Flex): Use a single .reduce() to filter and map in one single pass (O(N) time).

// V1

// Given the array of guest objects `guests` the function `vip` will capitalize and push all `names` where `vip` is true and `age` is 18 or over.

const guests = [
  { name: "john", age: 17, vip: true },
  { name: "sarah", age: 22, vip: true },
  { name: "mike", age: 25, vip: false },
];

function vip(guests) {
  let results = [];
  for (let i = 0; i < guests.length; i++) {
    if (guests[i].age >= 18 && guests[i].vip) {
      results.push(guests[i].name.toUpperCase());
    }
  }
  return results;
}
console.log(vip(guests));

// V2

