const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const set = new Set();
for (const word of input) {
    set.add(word);
}

console.log(
    [...set]
        .sort()
        .sort((a, b) => a.length - b.length)
        .join("\n")
);
