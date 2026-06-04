// ========== TASK 1 ==========
console.log("=== TASK 1 ===");
function rangeJS(start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}
console.log(rangeJS(3, 8));

// ========== TASK 2 ==========
console.log("\n=== TASK 2 ===");
const numbers = [2, 5, 8, 12, 3];

let squares = [];
for (let i = 0; i < numbers.length; i++) {
    squares.push(numbers[i] * numbers[i]);
}
console.log("Squares:", squares);

let sum = 0;
let i = 0;
while (i < numbers.length) {
    sum += numbers[i];
    i++;
}
console.log("Sum:", sum);
console.log("Q3 Answer: .push()");

// ========== TASK 3 ==========
console.log("\n=== TASK 3 ===");
function drawPyramid(height) {
    for (let i = 1; i <= height; i++) {
        console.log("#".repeat(i));
    }
}
drawPyramid(3);

// ========== TASK 4 ==========
console.log("\n=== TASK 4 ===");
const students = [
    { name: "Макар", role: "teamlead", exp: 5 },
    { name: "Денис", role: "programmer", exp: 4 },
    { name: "Анна", role: "programmer", exp: 2 },
    { name: "Даша", role: "designer", exp: 1 }
];

function getExperienced(studentsList, minExp) {
    let result = [];
    for (let i = 0; i < studentsList.length; i++) {
        if (studentsList[i].exp >= minExp) {
            result.push(studentsList[i].name);
        }
    }
    return result;
}
console.log(getExperienced(students, 3));