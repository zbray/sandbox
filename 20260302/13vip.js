// 13. The "VIP Guest List" (The Filter-Map Combo)

//     Description: You have an array of guest objects [{name: "john", age: 17, vip: true}, {name: "sarah", age: 22, vip: true}, {name: "mike", age: 25, vip: false}]. You need an array of just the capitalized names of VIPs who are 18 or older.
//     V1 (Pure): Use for loops, if statements, and .push().
//     V2 (Native): Chain .filter().map(). (Point out that this loops through the array twice).
//     V3 (The Flex): Use a single .reduce() to filter and map in one single pass (O(N) time).

// V1 - for loops, if statements, and .push()

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

// V2 - .filter().map() chain

// Chaining .map onto .filter we first create a new array of all objects where age is 18 or over and vip is true - then return only the name in all caps using .map

const guests = [
  { name: "john", age: 17, vip: true },
  { name: "sarah", age: 22, vip: true },
  { name: "mike", age: 25, vip: false },
];
const result = guests
  .filter((guest) => guest.age >= 18 && guest.vip)
  .map((guest) => guest.name.toUpperCase());
console.log(result);

// V3 - .reduce()

// Passing each guest object once through reduce we check for age and vip requirements, set the name of objects that pass to all caps and push to the accumulator.

const guests = [
  { name: "john", age: 17, vip: true },
  { name: "sarah", age: 22, vip: true },
  { name: "mike", age: 25, vip: false },
];
const result = guests.reduce((acc, cur) => {
  if (cur.age >= 18 && cur.vip) {
    acc.push(cur.name.toUpperCase());
  }
  return acc;
}, []);

console.log(result);
