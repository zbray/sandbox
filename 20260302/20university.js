// 20. The "University Registrar" (Deep Aggregation & Data Cleaning)
//     Goal: Test his patience, organizational skills, and ability to track scope through deeply nested
// structures. He will need to clean data, perform math, and restructure the output entirely.
// Constraint: None. He can use any built-in methods.

//   The Description: "You are building a reporting dashboard for a University. You receive a
//     deeply nested array of departments, courses, and students. However, the data is messy.
//     Students missed tests, some scores were recorded as strings, and some are just missing.
//     Your task is to build a comprehensive report that calculates:

//         Every individual student's average (ignoring invalid/missing scores).
//         The average score for each course.
//         The average score for each department.
//         The overall university average.
//         The name and score of the single top-performing student in the whole university."

// The Input:

// const universityData = [
//   {
//     department: "Engineering",
//     courses: [
//       {
//         courseName: "Calculus",
//         students: [
//           { id: "e1", name: "Alice", scores: [80, 90, 85] },
//           { id: "e2", name: "Bob", scores: [70, null, "absent", 75] }, // Needs cleaning
//         ],
//       },
//       {
//         courseName: "Physics",
//         students: [
//           { id: "e3", name: "Charlie", scores: [90, "95", 92] }, // String needs parsing
//         ],
//       },
//     ],
//   },
//   {
//     department: "Arts",
//     courses: [
//       {
//         courseName: "History",
//         students: [
//           { id: "a1", name: "Diana", scores: [88, 82, 85] },
//           { id: "a2", name: "Evan", scores: [] }, // Edge case: No scores
//         ],
//       },
//     ],
//   },
// ];

// The Expected Output:

//  { universityAverage: 85.3, // (Or whatever the exact math comes out to)
//   topStudent: { name: "Charlie", average: 92.3 },
//   departments: {
//     Engineering: {
//       departmentAverage: 84.5,
//       courses: {
//         Calculus: 80.0,
//         Physics: 92.3,
//       },
//     },
//     Arts: {
//       departmentAverage: 85.0,
//       courses: {
//         History: 85.0,
//       },
//     },
//   },
// };

// Logic Concept: This is laborious because it requires a multi-step pipeline. If he tries
// to do this in one giant nested loop, he will get completely lost.

// Step 1: He needs to learn to write helper functions (e.g., calculateCleanAverage(scoresArray)
// that filters out nulls/words, converts strings to numbers, and returns the average).
// Step 2: He has to traverse the tree from the bottom up. Calculate student averages first,
// push those up to calculate course averages, push those up for department averages, etc.
// Step 3: He has to completely flip the structure from arrays into nested objects based on keys.

// Note: Prompt had contradicting instructions. The Description said to calculate "Every individual student's average (ignoring invalid/missing scores)." but the Logic Concept section asked me to  "convert strings to numbers"
// I will be following the instruction in the Description and remove invalid/missing scores.
const universityData = [
  {
    department: "Engineering",
    courses: [
      {
        courseName: "Calculus",
        students: [
          { id: "e1", name: "Alice", scores: [80, 90, 85] },
          { id: "e2", name: "Bob", scores: [70, null, "absent", 75] }, // Needs cleaning
        ],
      },
      {
        courseName: "Physics",
        students: [
          { id: "e3", name: "Charlie", scores: [90, "95", 92] }, // String needs parsing
        ],
      },
    ],
  },
  {
    department: "Arts",
    courses: [
      {
        courseName: "History",
        students: [
          { id: "a1", name: "Diana", scores: [88, 82, 85] },
          { id: "a2", name: "Evan", scores: [] }, // Edge case: No scores
        ],
      },
    ],
  },
];

// Step 1: Write helper function to filter to only valid numbers,handle  numbers and return average
function calculateCleanAverage(scores) {
  // Substep 1: initialize valid variable to store scores that only numbers, ignore everything else
  const valid = scores.filter((score) => typeof score === "number");

  // Substep 2: ignore invalid/missing scores
  // This ignores Evan as Evan has no scores
  if (valid.length === 0) return null;

  // Substep 3: find the average
  return valid.reduce((sum, score) => sum + score, 0) / valid.length;
}
// Test the helper function
// console.log(calculateCleanAverage([80, 90, 85])); // Alice
// console.log(calculateCleanAverage([70, null, "absent", 75])); // Bob
// console.log(calculateCleanAverage([90, "95", 92])); // Charlie
// console.log(calculateCleanAverage([88, 82, 85])); // Diana
// console.log(calculateCleanAverage([])); // Evan

// Step 2: Main function: Traverse the tree bottom up

function generateUniversityRegistrar(data) {
  const departmentReports = {};
  // Step 2.1 Calculate student averages first,
  const allStudentAverages = [];

  data.forEach(({ department, courses }) => {
    const courseReports = {};
    const departmentStudentAverages = [];
    // Step 2.2 Loop through courses to find average
    courses.forEach(({ courseName, students }) => {
      const courseStudentAverages = [];

      students.forEach(({ name, scores }) => {
        const average = calculateCleanAverage(scores);

        if (average !== null) {
          // Push average to courseStudentAverages
          courseStudentAverages.push(average);
          // Push average to departmentStudentAverages
          departmentStudentAverages.push(average);
          // Push {name, average} to allStudentAverages
          allStudentAverages.push({ name, average });
        }
      });

      // Step 2.2 Course average (calculate it here)
      // I'm only checking for courses with averages in case there are courses with only students like Evan with no scores or averages
      if (courseStudentAverages.length > 0) {
        const courseAverage =
          courseStudentAverages.reduce((sum, avg) => sum + avg, 0) /
          courseStudentAverages.length;

        // Step 2.2 Course average (add to courseReports here)
        // This delivers the requirement in Step 3, "He has to completely flip the structure from arrays into nested objects based on keys."
        courseReports[courseName] = courseAverage;
      }
    });

    // Step 2.3 Department average
    if (departmentStudentAverages.length > 0) {
      const departmentAverage =
        departmentStudentAverages.reduce((sum, avg) => sum + avg, 0) /
        departmentStudentAverages.length;

      // Create an entry in the departmentReports object with a key:value pair of Department Name and an object of the departmentAverage and courses (Engineering dept, average of 83.3, courses showing name and score, pulling from courseReports object)
      departmentReports[department] = {
        departmentAverage,
        courses: courseReports,
      };
    }
  });
  // Step 2.4 University Average
  const universityAverage =
    // Using reduce I add all averages together and divide by .length
    allStudentAverages.reduce((sum, { average }) => sum + average, 0) /
    allStudentAverages.length;
  // Step 2.5 Top Student
  // Starting with the first student's average (Alice) compare each student's average against the next, keeping only the higher (top) average
  const topStudent = allStudentAverages.reduce((highest, current) => {
    return current.average > highest.average ? current : highest;
  }, allStudentAverages[0]);

  // Step 2.6 Deliver final object
  return {
    universityAverage,
    topStudent: { name: topStudent.name, average: topStudent.average },
    departments: departmentReports,
  };
}
const report = generateUniversityRegistrar(universityData);
console.log(JSON.stringify(report, null, 2));
