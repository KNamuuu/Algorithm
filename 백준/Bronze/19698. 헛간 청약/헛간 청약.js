const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const [N, W, H, L] = input;
const max = Math.floor(W / L) * Math.floor(H / L);

console.log(max < N ? max : N);
