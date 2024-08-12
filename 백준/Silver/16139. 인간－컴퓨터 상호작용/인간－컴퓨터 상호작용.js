const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const S = input.shift();
const q = Number(input.shift());
const answer = [];

for (const line of input) {
    const [a, i, j] = line.split(" ");
    const str = S.slice(Number(i), Number(j) + 1).split("");
    console.log(str.filter((el) => el === a).length);
}
