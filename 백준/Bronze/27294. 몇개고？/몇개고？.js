const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const [T, S] = input;

if (S === 1) return console.log(280);
else {
    if (T >= 12 && T <= 16) return console.log(320);
    else return console.log(280);
}
