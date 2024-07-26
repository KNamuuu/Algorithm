const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

input.shift();

for (const line of input) {
    const answer = [];
    answer.push(line.split("")[0]);
    answer.push(line.split("")[line.length - 1]);
    console.log(answer.join(""));
}
