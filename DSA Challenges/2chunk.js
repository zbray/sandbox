// 2. The "Chunker" (Array Grouping)

//     Description: Write a function that takes an array and a size,
//     and splits the array into multiple arrays of that size.
//     Forbidden: .slice(), .splice().
//     Expected Output: chunk([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]]

function chunker(input, size) {
  // create function that takes input and size arguments
  let result = [];
  let currentChunk = [];

  // initialize the result array empty to start and currentChunk as it's built

  for (let i = 0; i < input.length; i++) {
    currentChunk.push(input[i]);

    // if current Chunk reaches length of user size, move it to result and start over
    if (currentChunk.length === size) {
      result.push(currentChunk);
      currentChunk = [];
    }
  }

  // if we have leftover, push them and then return result
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }
  return result;
  // loop will iterate through the input length
}
