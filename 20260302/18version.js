// 18. The "Version Manager" (Semantic Sorting)

// Description: You are building a software updater.
// You receive a list of version numbers as strings,
// and you need to sort them from oldest to newest.

// The Catch: Standard JavaScript string sorting will
// fail here, because alphabetically, "1.10.0" comes before "1.2.0".

// The Input:

// const versions = ["1.1.2", "1.10.0", "1.2.0", "2.0.1", "0.9.9"];

// Expected Output: ["0.9.9", "1.1.2", "1.2.0", "1.10.0", "2.0.1"]

// Logic Concept: He has to split the strings by the period (.split('.')),
// convert the chunks into numbers, and write a custom comparison function
// for .sort(). He must compare the "Major" version first; if they are a tie,
// compare the "Minor" version; if they are a tie, compare the "Patch" version.

function sortVersions(versions) {
  return [...versions].sort((a, b) => {
    const [aMajor, aMinor, aPatch] = a.split(".").map(Number);
    const [bMajor, bMinor, bPatch] = b.split(".").map(Number);

    if (aMajor !== bMajor) return aMajor - bMajor;
    if (aMinor !== bMinor) return aMinor - bMinor;
    return aPatch - bPatch;
  });
}

const versions = ["1.1.2", "1.10.0", "1.2.0", "2.0.1", "0.9.9"];
console.log(sortVersions(versions));
