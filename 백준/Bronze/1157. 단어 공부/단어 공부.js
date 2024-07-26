const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const map = new Map();

input
    .toUpperCase()
    .split("")
    .forEach((c) => {
        if (map.has(c)) {
            map.set(c, map.get(c) + 1);
        } else {
            map.set(c, 0);
        }
    });

let max = 0;
let answer = [];

for (const [char, count] of [...map]) {
    if (max < count) {
        max = count;
        answer = [];
        answer.push(char);
    } else if (max === count) answer.push(char);
}

console.log(answer.length === 1 ? answer[0] : "?");
