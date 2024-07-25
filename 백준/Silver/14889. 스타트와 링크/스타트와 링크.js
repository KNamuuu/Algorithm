const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const ability = input.map((el) => el.split(" ").map(Number));

function getCombinations(arr, selectNum) {
    if (selectNum === 1) return arr.map((el) => [el]);

    const result = [];

    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const combinations = getCombinations(rest, selectNum - 1);
        const attached = combinations.map((combination) => [
            fixed,
            ...combination,
        ]);

        result.push(...attached);
    });

    return result;
}

function getPermutations(arr, selectNum) {
    if (selectNum === 1) return arr.map((el) => [el]);

    const result = [];

    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        const permutations = getPermutations(rest, selectNum - 1);
        const attached = permutations.map((permutation) => [
            fixed,
            ...permutation,
        ]);

        result.push(...attached);
    });

    return result;
}

const combinations = getCombinations(
    new Array(N).fill().map((_, idx) => idx),
    N / 2
);
let min = 10000000;

for (let i = 0; i < combinations.length; i++) {
    let start = 0;
    let link = 0;

    // 스타트팀
    for (const [a, b] of getPermutations(combinations[i], 2)) {
        start += ability[a][b];
    }

    const linkTeam = new Array(N)
        .fill()
        .map((_, idx) => idx)
        .filter((el) => !combinations[i].includes(el));

    // 링크팀
    for (const [a, b] of getPermutations(linkTeam, 2)) {
        link += ability[a][b];
    }

    min = Math.min(min, Math.abs(start - link));
}

console.log(min);
