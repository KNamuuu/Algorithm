const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const arr = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
const M = Number(input.shift());
const answer = [];

for (const num of input.shift().split(" ").map(Number)) {
    let start = 0;
    let end = arr.length - 1;
    let isInclude = false;

    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (num > arr[mid]) start = mid + 1;
        else if (num < arr[mid]) end = mid - 1;
        else {
            isInclude = true;
            break;
        }
    }

    isInclude ? answer.push(1) : answer.push(0);
}

console.log(answer.join("\n"));
