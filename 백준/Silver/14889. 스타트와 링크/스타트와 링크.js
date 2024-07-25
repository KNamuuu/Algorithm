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

function carculateTeamAbility(team) {
    let result = 0;

    for (let i = 0; i < team.length; i++) {
        for (let j = 0; j < team.length; j++) {
            result += ability[team[i]][team[j]];
        }
    }

    return result;
}

const combinations = getCombinations(
    new Array(N).fill().map((_, idx) => idx),
    N / 2
);

let min = Infinity;

for (let i = 0; i < combinations.length; i++) {
    const linkTeam = new Array(N)
        .fill()
        .map((_, idx) => idx)
        .filter((el) => !combinations[i].includes(el));

    const start = carculateTeamAbility(combinations[i]);
    const link = carculateTeamAbility(linkTeam);

    min = Math.min(min, Math.abs(start - link));
}

console.log(min);
