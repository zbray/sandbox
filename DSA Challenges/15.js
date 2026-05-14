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
  { id: 4, name: "Books", parentId: null },
];

// }

// 1. Start by creating the lookup map "lookupMap" and use the spread operator to add empty "children" arrays
// Also declare a rootNodes array for all the elements that have no parentID and will be at the root of the resulting object

function buildTree(flat) {
  const rootNodes = [];
  const lookupMap = {};
  flat.forEach((item) => {
    // spread all the existing properties of item, then add a new property "children" set to an empty array.
    lookupMap[item.id] = { ...item, children: [] };
  });
  // 2. Loop though flat array and check for parentID
  flat.forEach((item) => {
    if (item.parentId === null) {
      // push the element to the rootNodes array if parentID is null
      rootNodes.push(lookupMap[item.id]);
    }
    // if the parentID is not null push that item into the child array of the element that is found in "parentID"
    else {
      lookupMap[item.parentId].children.push(lookupMap[item.id]);
    }
  });
  return rootNodes;
  // console.log(JSON.stringify(rootNodes, null, 2));
}
console.log(JSON.stringify(buildTree(flat), null, 2)); // Topics covered:
// 1. Lookup map
// 2. Object references
