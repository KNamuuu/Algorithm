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
    .sort((a, b) => a - b);
const answer = new Set();

function getPermutations(arr, number) {
    if (number === 1) return arr.map((el) => [el]);

    const result = [];
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, number - 1);
        const attached = permutations.map((permutation) => [
            fixed,
            ...permutation,
        ]);

        result.push(...attached);
    });

    return result;
}

const permutations = getPermutations(
    Array.from({ length: arr.length }, (_, i) => i),
    M
);

for (const permutation of permutations) {
    const line = [];
    for (const index of permutation) {
        line.push(arr[index]);
    }
    answer.add(line.join(" "));
}

console.log([...answer].join("\n"));
