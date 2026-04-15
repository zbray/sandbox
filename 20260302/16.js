// 16. The "Data Table Controller" (Pagination & Sorting)

//     Description: Write a function getTableData(data, sortBy, sortOrder, page, pageSize)
//     that takes a massive array of user objects and returns only the specific slice of data
//     the user is looking at.

//     Example Call: getTableData(users, "age", "desc", 2, 10) (This should sort the users by
//     age descending, skip the first 10, and return the next 10).
//     Logic Concept: This is the ultimate pipeline. He must handle missing arguments (defaults),
//     sort the data dynamically based on object keys, and then use math ((page - 1) * pageSize)
//     to slice the array properly.

// Notes:
// Top Level steps:
// 1. Sort the data
// 2. Handle missing arguments
// 3. Paginate the results

const users = [
  { id: 1, name: "Fred", age: 30 },
  { id: 2, name: "Velma", age: 31 },
  { id: 3, name: "Shaggy", age: 34 },
  { id: 4, name: "Scooby", age: 12 },
];

// Set defaults of the provided function arguments to handle missing arguments
function getTableData(
  data,
  sortBy = "id",
  sortOrder = "asc",
  page = 1,
  pageSize = 10,
) {
  // 2. Sort the data in a new array sortedData as to not mutate the source array users
  const sortedData =
    sortOrder === "desc"
      ? [...data].sort((a, b) => b[sortBy] - a[sortBy])
      : [...data].sort((a, b) => a[sortBy] - b[sortBy]);

  // Paginate the results with start and end Indexes
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // slice the data into pages that will fit given the parameters set by the getTableData call (page size and number)
  const slicedPage = sortedData.slice(startIndex, endIndex);
  console.log(slicedPage);
  return slicedPage;
}
getTableData(users, "age", "asc", 1, 2);
