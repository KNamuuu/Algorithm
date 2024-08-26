const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = input.shift();
const stats = input.map((line) => line.split(" ").map(Number));
const answer = [];

for (let i = 0; i < N; i++) {
    let grade = 1;
    for (let j = 0; j < N; j++) {
        if (stats[i][0] < stats[j][0] && stats[i][1] < stats[j][1]) grade++;
    }

    answer.push(grade);
}

console.log(answer.join("\n"));
