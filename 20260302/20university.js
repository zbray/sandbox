// 20. The "University Registrar" (Deep Aggregation & Data Cleaning)
//     Goal: Test his patience, organizational skills, and ability to track scope through deeply nested structures. He will need to clean data, perform math, and restructure the output entirely. Constraint: None. He can use any built-in methods.
//     The Description: "You are building a reporting dashboard for a University. You receive a deeply nested array of departments, courses, and students. However, the data is messy. Students missed tests, some scores were recorded as strings, and some are just missing.
//     Your task is to build a comprehensive report that calculates:

//         Every individual student's average (ignoring invalid/missing scores).
//         The average score for each course.
//         The average score for each department.
//         The overall university average.
//         The name and score of the single top-performing student in the whole university."

// The Input:

// const universityData = [
// {
// department: "Engineering",
// courses: [
// {
// courseName: "Calculus",
// students: [
// { id: "e1", name: "Alice", scores: [80, 90, 85] },
// { id: "e2", name: "Bob", scores: [70, null, "absent", 75] } // Needs cleaning
// ]
// },
// {
// courseName: "Physics",
// students: [
// { id: "e3", name: "Charlie", scores: [90, "95", 92] } // String needs parsing
// ]
// }
// ]
// },
// {
// department: "Arts",
// courses: [
// {
// courseName: "History",
// students: [
// { id: "a1", name: "Diana", scores: [88, 82, 85] },
// { id: "a2", name: "Evan", scores: [] } // Edge case: No scores
// ]
// }
// ]
// }
// ];

// The Expected Output:

// {
// universityAverage: 85.3, // (Or whatever the exact math comes out to)
// topStudent: { name: "Charlie", average: 92.3 },
// departments: {
// "Engineering": {
// departmentAverage: 84.5,
// courses: {
// "Calculus": 80.0,
// "Physics": 92.3
// }
// },
// "Arts": {
// departmentAverage: 85.0,
// courses: {
// "History": 85.0
// }
// }
// }
// }

// Logic Concept: This is laborious because it requires a multi-step pipeline. If he tries to do this in one giant nested loop, he will get completely lost.

// Step 1: He needs to learn to write helper functions (e.g., calculateCleanAverage(scoresArray) that filters out nulls/words, converts strings to numbers, and returns the average).
// Step 2: He has to traverse the tree from the bottom up. Calculate student averages first, push those up to calculate course averages, push those up for department averages, etc.
// Step 3: He has to completely flip the structure from arrays into nested objects based on keys.

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
