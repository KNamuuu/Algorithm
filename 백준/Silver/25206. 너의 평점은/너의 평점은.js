const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const scoreByGrade = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
};

let sum = 0;
let totalScore = 0;

for (const line of input) {
    const [subject, score, grade] = line.split(" ");
    if (grade === "P") continue;

    sum += Number(score) * scoreByGrade[grade];
    totalScore += Number(score);
}

console.log(sum / totalScore);
