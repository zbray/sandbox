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
// function deepGrade(classes) {
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
// console.log(deepGrade(classes));

