const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = input.shift();

const map = Array.from({ length: 100 }, () =>
    Array.from({ length: 100 }, () => 0)
);

for (const paper of input) {
    const [x, y] = paper.split(" ").map(Number);

    for (let i = x; i < x + 10; i++) {
        for (let j = y; j < y + 10; j++) {
            map[i][j] = 1;
        }
    }
}

let answer = 0;

for (const line of map) {
    answer += [...line].filter((el) => el === 1).length;
}

console.log(answer);
