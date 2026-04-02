// 14. The "Deep Grade Analyzer" (Flattening & Math)

//     Description: Given an array of classes, each containing an array of student objects with their grades, find the overall average grade of all students combined.

// JavaScript

// const classes = [
// [{ name: "Ali", grade: 80 }, { name: "Bia", grade: 90 }],
// [{ name: "Cid", grade: 70 }]
// ]; // Total grades: 240. Total students: 3. Average: 80.

//     V1 (Pure): Nested for loops tracking a sum and a count.
//     V2 (Native): .flatMap() to combine the arrays, then .map() to get the grades, then .reduce() to sum them.
//     V3 (The Flex): A single, highly complex .reduce() that flattens, extracts, and sums all at once.

// V1
// const classes = [
//   [
//     { name: "Ali", grade: 80 },
//     { name: "Bia", grade: 90 },
//   ],
//   [{ name: "Cid", grade: 70 }],
// ]; // Total grades: 240. Total students: 3. Average: 80.
// function gradeNative(classes) {
//   let totalGrades = 0;
//   let totalStudents = 0;
//   for (const studentClass of classes) {
//     for (const student of studentClass) {
//       totalGrades += student.grade;
//       totalStudents++;
//     }
//   }
//   return totalGrades / totalStudents;
// }
// console.log(gradeNative(classes));

// V2
// const classes = [
//   [
//     { name: "Ali", grade: 80 },
//     { name: "Bia", grade: 90 },
//   ],
//   [{ name: "Cid", grade: 70 }],
// ];
// function gradePure(classes) {
//   const students = classes.flatMap((studentClass) => studentClass);
//   const grades = students
//     .map((student) => student.grade)
//     .reduce((totalGrades, grade) => totalGrades + grade, 0);
//   const average = grades / students.length;
//   return average;
// }
// console.log(gradePure(classes));

// V3

// const classes = [
//   [
//     { name: "Ali", grade: 80 },
//     { name: "Bia", grade: 90 },
//   ],
//   [{ name: "Cid", grade: 70 }],
// ];

// function gradeFlex(classes) {
//   const totals = classes.reduce(
//     (currentTotals, studentClass) => {
//       for (const student of studentClass) {
//         currentTotals.totalGrades += student.grade;
//         currentTotals.totalStudents++;
//       }
//       return currentTotals;
//     },
//     { totalGrades: 0, totalStudents: 0 },
//   );
//   return totals.totalGrades / totals.totalStudents;
// }
// console.log(gradeFlex(classes));
