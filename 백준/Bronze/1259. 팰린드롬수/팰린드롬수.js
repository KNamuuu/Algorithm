const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const answer = [];

for (const number of input) {
    if (number === "0") break;

    const arr = number.split("");
    let isPalindrome = true;
    for (let i = 0; i < Math.sqrt(arr.length); i++) {
        if (arr[i] !== arr[arr.length - i - 1]) isPalindrome = false;
    }

    isPalindrome ? answer.push("yes") : answer.push("no");
}

console.log(answer.join("\n"));
