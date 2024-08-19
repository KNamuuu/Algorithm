const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

let [N, K] = input.shift().split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => b - a);

let answer = 0;
while (K > 0) {
    for (const coin of arr) {
        if (K / coin > 0) {
            answer += parseInt(K / coin);
            K = K % coin;
        }
    }
}

console.log(answer);
