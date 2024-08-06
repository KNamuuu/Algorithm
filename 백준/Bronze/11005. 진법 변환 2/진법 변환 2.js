const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [N, B] = input;

console.log(Number(N).toString(B).toUpperCase());
