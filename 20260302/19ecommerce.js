// 19. The "E-Commerce Engine" (Advanced State Management)
//     Description: A user is clicking around a shopping cart quickly.
// You receive an array of "actions" they took. You need to process
// these actions in order, consolidate duplicate items, handle removals,
// apply a store-wide discount, and return the final checkout object.

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
//     Logic Concept: This is the ultimate test of everything he has learned.
// He will likely need to use .reduce() (or a very well-managed for loop and an
// external object) to build the cart state step-by-step. He has to handle the
// logic of removing an item completely if its quantity hits 0, and then do a
// final math calculation on the result.

const actions = [
  { type: "add", item: "laptop", price: 1000, qty: 1 },
  { type: "add", item: "mouse", price: 50, qty: 1 },
  { type: "add", item: "laptop", price: 1000, qty: 1 },
  { type: "remove", item: "mouse", qty: 1 },
  { type: "add", item: "keyboard", price: 100, qty: 2 },
];

const discountPercent = 10;

function processCart(actions, discountPercent) {
  const { cart, prices } = actions.reduce(
    (state, action) => {
      // initialize new variables by destructuring the input actions objects being processed from the reduce() method
      const { item, qty, price, type } = action;

      // For all add actions:
      // using the Nullish coalescing operator check first if the item already exists in cart, if it doesn't exist start from zero and add that item's qty.
      // if it does exist, carry on from that qty
      // then save the unit price to state for discount calc later
      if (type === "add") {
        state.cart[item] = (state.cart[item] ?? 0) + qty;
        state.prices[item] = price;
      }

      // For all remove action:
      // check if what is being removed exists in the cart. if it doesn't, treat as 0 so as to not return undefined
      // if it does exist, calculate what the new qty will be after removing items
      // this is stored in updatedQty to check how to proceed per prompt
      if (type === "remove") {
        // store the result of the current cart item less the qty of the current iterating element's qty to updatedQty
        const updatedQty = (state.cart[item] ?? 0) - qty;
        // if updatedQty is <= 0 the item needs to be removed from the cart.
        if (updatedQty <= 0) {
          delete state.cart[item];
        } else {
          // if updatedQty is not <= store that value the cart's current item qty state.
          state.cart[item] = updatedQty;
        }
      }
      // return state object so it becomes the acc for the next pass
      return state;
    },
    { cart: {}, prices: {} },
  );

  // object.entries returns an array of an object's own key-value pairs
  // convert the object to an array of values and return the total subtotal of all items
  const subtotal = Object.entries(cart).reduce(
    (sum, [item, qty]) => sum + qty * prices[item],
    0,
  );

  // prevent trailing decimals with Math.round
  const finalTotal = Math.round(subtotal * ((100 - discountPercent) / 100));
  return { cart, finalTotal };
}

console.log(processCart(actions, discountPercent));
