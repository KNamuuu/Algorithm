const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const ability = input.map((line) => line.split(" ").map(Number));

function calculateTeamAbility(team) {
    let sum = 0;
    for (let i = 0; i < team.length; i++) {
        for (let j = 0; j < team.length; j++) {
            sum += ability[team[i]][team[j]];
        }
    }
    return sum;
}

let min = Infinity;

function dfs(index, teamStart) {
    if (teamStart.length === N / 2) {
        const teamLink = [];
        for (let i = 0; i < N; i++) {
            if (!teamStart.includes(i)) {
                teamLink.push(i);
            }
        }
        const start = calculateTeamAbility(teamStart);
        const link = calculateTeamAbility(teamLink);
        min = Math.min(min, Math.abs(start - link));
        return;
    }

    for (let i = index; i < N; i++) {
        teamStart.push(i);
        dfs(i + 1, teamStart);
        teamStart.pop();
    }
}

dfs(0, []);
console.log(min);
