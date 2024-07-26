const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

input.shift();

for (const line of input) {
    const [n, str] = line.split(" ");

    const answer = [];
    for (const c of str) {
        answer.push(c.repeat(Number(n)));
    }

    console.log(answer.join(""));
}
