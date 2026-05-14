// 21. The "Global Financial Reconciliation" (The Ultimate Pipeline)
//     Goal: Simulate a real-world, extremely messy data integration task.
// He must build a pipeline that cleans inconsistent data types,
// normalizes currencies, parses dates, and aggregates metrics across
// multiple dimensions. Constraint: None. He should heavily rely on
// built-in methods and is strongly encouraged to write separate helper
//  functions (e.g., parsePrice(), normalizeDate()) rather than doing
// it all in one massive block.

// The Description: "You are tasked with generating an end-of-quarter
// financial report for a global e-commerce marketplace. You are given
// a massive log of raw transactions, but the data comes from different
// regional servers, meaning the formatting is a complete disaster.

// You also have an exchangeRates object. Your task is to process this
// raw data and generate a perfectly structured JSON report in a single
// base currency (USD)."

// The Business Rules (The Mentee MUST follow these):

// .padStart()
// 1. Status: Only calculate revenue for transactions where the status
// is exactly "COMPLETED" (case-insensitive). Ignore "failed", "pending",
// or "refunded".
// 2. Quantities: If qty is missing (null or undefined), assume it is 1.
// If it's a string ("3"), convert it to a number.
// 3. Currencies: Prices are a mess.
//    If it's a raw number (e.g., 25.5), assume it's USD.
//    If it's a string, it contains a symbol ($, €, £, ¥). You must strip
// the symbol, convert the string to a number (watch out for European
// comma decimals like "20,50" which means 20.50), and multiply it by the
// provided exchange rate to get the USD value.
// 4. Dates: Dates come in multiple formats (YYYY-MM-DD, MM/DD/YYYY, or
// full ISO strings). You must extract just the Year and Month to group
// |revenue by month (e.g., "2023-01").

// The Input Data:

// const exchangeRates = { EUR: 1.10, GBP: 1.30, JPY: 0.007, USD: 1 };

// const rawTransactions = [
// { tId: "T1", user: "u01", product: "Laptop", qty: 2, price: "$1000.00", status: "COMPLETED", date: "2023-01-15" },
// { tId: "T2", user: "u02", product: "Mouse", qty: null, price: "€20,00", status: "completed", date: "01/16/2023" },
// { tId: "T3", user: "u01", product: "Laptop", qty: 1, price: "$1000.00", status: "REFUNDED", date: "2023-01-20" },
// { tId: "T4", user: "u03", product: "Keyboard", qty: 5, price: "£40.50", status: "Failed", date: "2023-02-05" },
// { tId: "T5", user: "u02", product: "Monitor", qty: "3", price: "¥15000", status: "COMPLETED", date: "2023-02-10T08:00:00Z" },
// { tId: "T6", user: "u04", product: "Mouse", qty: 1, price: 25.00, status: "COMPLETED", date: "2023-03-01" }
// ];

// The Expected Output: He needs to transform that mess into this exact analytical structure:

//     {
//       totalGrossRevenueUSD: 2362.00, // Sum of all valid transactions in USD
//       topSpender: "u01", // User ID who spent the most total money
//       bestSellingProduct: "Laptop", // Product with the highest total quantity sold
//       revenueByMonth: {
//         "2023-01": 2022.00, // (2 Laptops @ $1000) + (1 Mouse @ €20 * 1.10)
//         "2023-02": 315.00,  // (3 Monitors @ ¥15000 * 0.007)
//         "2023-03": 25.00    // (1 Mouse @ 25 USD)
//       },
//       userMetrics: {
//         "u01": { totalSpentUSD: 2000.00, itemsBought: 2 },
//         "u02": { totalSpentUSD: 337.00, itemsBought: 4 },
//         "u04": { totalSpentUSD: 25.00, itemsBought: 1 }
//       }
// .padStart()
//     }

const exchangeRates = { EUR: 1.1, GBP: 1.3, JPY: 0.007, USD: 1 };

const rawTransactions = [
  {
    tId: "T1",
    user: "u01",
    product: "Laptop",
    qty: 2,
    price: "$1000.00",
    status: "COMPLETED",
    date: "2023-01-15",
  },
  {
    tId: "T2",
    user: "u02",
    product: "Mouse",
    qty: null,
    price: "€20,00",
    status: "completed",
    date: "01/16/2023",
  },
  {
    tId: "T3",
    user: "u01",
    product: "Laptop",
    qty: 1,
    price: "$1000.00",
    status: "REFUNDED",
    date: "2023-01-20",
  },
  {
    tId: "T4",
    user: "u03",
    product: "Keyboard",
    qty: 5,
    price: "£40.50",
    status: "Failed",
    date: "2023-02-05",
  },
  {
    tId: "T5",
    user: "u02",
    product: "Monitor",
    qty: "3",
    price: "¥15000",
    status: "COMPLETED",
    date: "2023-02-10T08:00:00Z",
  },
  {
    tId: "T6",
    user: "u04",
    product: "Mouse",
    qty: 1,
    price: 25.0,
    status: "COMPLETED",
    date: "2023-03-01",
  },
];

// Map currency symbols to currency codes

const symbolMap = {
  $: "USD",
  "€": "EUR",
  "£": "GBP",
  "¥": "JPY",
};

// Check status validity
function checkStatus(status) {
  if (!status) return false;
  return status.toLowerCase() === "completed";
}

// Find USD
function parsePrice(price, exchangeRates) {
  // check for raw numbers
  if (typeof price === "number") {
    return price;
  }

  // the rest will be strings, extract symbol from symbolMap for currency
  const symbol = price[0];
  const currency = symbolMap[symbol];
  const rate = exchangeRates[currency];

  // clean string for calculating; remove the symbols and replace commas with periods
  const cleanedCurrency = price.slice(1).replace(",", ".");
  const numericValue = parseFloat(cleanedCurrency);

  // return USD
  return numericValue * rate;
}

// Find Date
function normalizeDate(dateString) {
  let date;
  // Detect format and create object to be parsed
  if (dateString.includes("/")) {
    // check for MM/DD/YYYY
    const [month, day, year] = dateString.split("/");
    // the Date constructor uses numbers 0-11 for months so we must -1 to calculate correctly
    date = new Date(year, month - 1, day);
  } else {
    // handle YYYY-MM-DD and ISO Formats
    date = new Date(dateString);
  }
  // Extract year and date from parse
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  // +1 here to accurately record
  // .padStart() to ensure each month is two digits

  // Format for report
  return `${year}-${month}`;
}

// Parse Quantity
function normalizeQty(qty) {
  const n = parseInt(qty);
  // using a ternary operator, and per the prompt, assume NaN means 1, and for everything else take the number provided
  return isNaN(n) ? 1 : n;
}

// lessons:
// Date Constructor
// .padStart()
