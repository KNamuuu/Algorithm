const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [H, W, N, M] = input.shift().split(" ").map(Number);

console.log(Math.ceil(H / (N + 1)) * Math.ceil(W / (M + 1)));
