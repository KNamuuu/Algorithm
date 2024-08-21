const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const string = input[0];
const wordSet = new Set();

for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
        wordSet.add(string.slice(i, j));
    }
}

console.log(wordSet.size);
