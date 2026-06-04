
// DATA (Provided by teacher)
// ==================
const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

// ==================
// FUNCTIONS (from each team member)
// ==================

// (Макар/Team Lead) - Ensures functions are imported/defined
function calculateAverage(data) { /* [Programmer 1's logic] */ }
function findTopStudent(data) { /* [Programmer 2's logic] */ }
function filterFailed(data, passScore) { /* [Programmer 3's logic] */ }
function addLetterGrade(data) { /* [Programmer 4's logic] */ }


// DEMONSTRATION
// ==================
console.log("--- Student Grade Analysis Report ---");

// 1. Average grade
const average = calculateAverage(grades);
console.log(`Average Grade: ${average.toFixed(2)}`); // toFixed(2) rounds to 2 decimals

// 2. Top student
const topStudentName = findTopStudent(grades);
console.log(`🏆 Top Student: ${topStudentName}`);

// 3. Failed students (pass score = 60)
const failedStudents = filterFailed(grades, 60);
console.log(` Failed Students (below 60): [${failedStudents.join(", ")}]`);

// 4. Add letter grades and display final data
const gradedStudents = addLetterGrade(grades);
console.log("\n Final Grades with Letters:");
console.table(gradedStudents); // Uses a table for a nicer output