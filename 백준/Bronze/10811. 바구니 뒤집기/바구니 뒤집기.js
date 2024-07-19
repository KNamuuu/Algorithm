let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arr = [];

for (let i = 0; i < N; i++) {
    arr.push(i + 1);
}

for (const line of input) {
    const [i, j] = line.split(" ").map(Number);

    const reverse = arr.splice(i - 1, j - i + 1).reverse();
    arr.splice(i - 1, 0, ...reverse);
}

console.log(arr.join(" "));
