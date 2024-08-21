const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const set1 = new Set(input[0].split(" ").map(Number));
const set2 = input[1].split(" ").map(Number);

set2.forEach((number) => {
    if (set1.has(number)) set1.delete(number);
    else set1.add(number);
});

console.log([...set1].length);
