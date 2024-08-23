const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const answer = input
    .split("-")
    .map((line) =>
        line
            .split("+")
            .map(Number)
            .reduce((a, b) => a + b)
    )
    .reduce((a, b) => a - b);

console.log(answer);
