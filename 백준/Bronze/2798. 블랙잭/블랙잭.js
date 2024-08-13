const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
let answer = 0;

function getCombination(arr, selectNum) {
    if (selectNum === 1) {
        return arr.map((el) => [el]);
    }

    const result = [];
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombination(rest, selectNum - 1);
        const attached = combinations.map((combination) => [
            fixed,
            ...combination,
        ]);
        result.push(...attached);
    });

    return result;
}

const combinations = getCombination(arr, 3);

for (const combination of combinations) {
    const [a, b, c] = combination;
    if (a + b + c <= M) answer = Math.max(answer, a + b + c);
}

console.log(answer);
