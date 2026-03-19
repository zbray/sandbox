// 8. The "Tax Calculator" (Focus: Map)

// Description: Take an array of prices and add a 10% tax to each one.

// function calcTax takes input prices

// V1

function calcTax(prices) {
// initialize result as a blank array expecting an array of prices as input
  let result = [];
  // loop through input array 
  for (let i = 0; i < prices.length; i++) {
    // find each elements price with tax
    let withTax = prices[i] * 1.1;
    // push the taxed elements to result
    result.push(withTax);
  }
  // return result
  return result;
}

// V2

function calcTax(prices) {
  // .map will iterate through each element in input array
  return prices.map(function(price) {
    return price * 1.1;
  });
}