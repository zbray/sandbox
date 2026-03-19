// V2

function calcTax(arr) {
  return arr.map(function (item) {
    return item * 1.1;
  });
}

// v3

function calcTax(prices) {
  // using the reduce method on the input prices array iterate using reduce
  return prices.reduce(function (acc, price) {
    // push to acc the taxed amount of each price
    acc.push(price * 1.1);
    // return the acc array
    return acc;
  }, []);
}
