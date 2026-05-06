// 19. The "E-Commerce Engine" (Advanced State Management)
//     Description: A user is clicking around a shopping cart quickly. You receive an array of "actions" they took. You need to process these actions in order, consolidate duplicate items, handle removals, apply a store-wide discount, and return the final checkout object.
//     The Input:
// const actions = [
//   { type: "add", item: "laptop", price: 1000, qty: 1 },
//   { type: "add", item: "mouse", price: 50, qty: 1 },
//   { type: "add", item: "laptop", price: 1000, qty: 1 },
//   { type: "remove", item: "mouse", qty: 1 },
//   { type: "add", item: "keyboard", price: 100, qty: 2 }
// ];
// const discountPercent = 10; // 10% off the total
// Expected Output:
// {
//   cart: { laptop: 2, keyboard: 2 },
//   finalTotal: 1980 // (2 laptops + 2 keyboards) = 2200 - 10% discount
// }
//     Logic Concept: This is the ultimate test of everything he has learned. He will likely need to use .reduce() (or a very well-managed for loop and an external object) to build the cart state step-by-step. He has to handle the logic of removing an item completely if its quantity hits 0, and then do a final math calculation on the result.

const actions = [
  { type: "add", item: "laptop", price: 1000, qty: 1 },
  { type: "add", item: "mouse", price: 50, qty: 1 },
  { type: "add", item: "laptop", price: 1000, qty: 1 },
  { type: "remove", item: "mouse", qty: 1 },
  { type: "add", item: "keyboard", price: 100, qty: 2 },
];
