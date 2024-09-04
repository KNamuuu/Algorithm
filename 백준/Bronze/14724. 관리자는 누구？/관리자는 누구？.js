const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = input.shift();
const scores = input.map((line) => line.split(" ").map(Number));
const clubs = [
    "PROBRAIN",
    "GROW",
    "ARGOS",
    "ADMIN",
    "ANT",
    "MOTION",
    "SPG",
    "COMON",
    "ALMIGHTY",
];
let clubIndex = 0;
let maxScore = Math.max(...scores[0]);

for (let i = 1; i < clubs.length; i++) {
    if (maxScore < Math.max(...scores[i])) {
        clubIndex = i;
        maxScore = Math.max(...scores[i]);
    }
}

console.log(clubs[clubIndex]);
