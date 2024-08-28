const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

let N = Number(input.shift());
const paper = input.map((line) => line.split(" "));
let blueCount = 0;
let whiteCount = 0;

function recursion(x, y, number) {
    let count = 0;

    for (let i = x; i < x + number; i++) {
        for (let j = y; j < y + number; j++) {
            if (paper[i][j] === "0") count++;
        }
    }

    if (count === Math.pow(number, 2)) whiteCount++;
    else if (count === 0) blueCount++;
    else {
        number /= 2;

        recursion(x, y, number);
        recursion(x, y + number, number);
        recursion(x + number, y, number);
        recursion(x + number, y + number, number);
    }
}

recursion(0, 0, N);

console.log(whiteCount);
console.log(blueCount);
