const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

function getCombinations(arr, selectNum) {
    const result = [];

    if (selectNum === 0) return [[]];
    if (selectNum === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const combinations = getCombinations(rest, selectNum - 1);
        const attached = combinations.map((el) => [fixed, ...el]);
        result.push(...attached);
    });

    return result;
}

const numArr = [];

for (let i = 1; i <= N; i++) {
    numArr.push(i);
}

console.log(getCombinations(numArr, K).length);
