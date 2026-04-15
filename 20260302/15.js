// 15. The "Tree Builder" (Flat to Hierarchical)

// Description: Databases return "flat" data, but UI components 
//   (like dropdown menus or comment threads) need "nested" trees. 
//   Take a flat array of categories and build a nested object tree.

// The Input:

// const flat = [
//   { id: 1, name: "Electronics", parentId: null },
//   { id: 2, name: "Computers", parentId: 1 },
//   { id: 3, name: "Laptops", parentId: 2 },
//   { id: 4, name: "Books", parentId: null }
// ];

// Expected Output: An object or array where "Computers" 
//    is nested inside the children array of "Electronics", and
//    "Laptops" is inside "Computers".
// Logic Concept: This tests object references and Hash Maps. 
//    If he tries to solve this with raw nested loops, it will be a 
//    nightmare. He needs to learn to create a "Lookup Map" (an object 
//    mapping IDs to the items) to assemble the tree efficiently.
  
const flat = [
  { id: 1, name: "Electronics", parentId: null },
  { id: 2, name: "Computers", parentId: 1 },
  { id: 3, name: "Laptops", parentId: 2 },
  { id: 4, name: "Books", parentId: null }
];

// starting with 
// function buildTree(flat) {

// }
const map = {};

flat.forEach(item => {
  map[item.id] = item;
});

console.log(map);