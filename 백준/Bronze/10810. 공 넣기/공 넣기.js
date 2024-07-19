let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const basket = new Array(N).fill(0);

for (const line of input) {
    const [i, j, k] = line.split(" ").map(Number);

    for (let l = i - 1; l < j; l++) basket[l] = k;
}

console.log(basket.join(" "));
