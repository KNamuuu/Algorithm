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

    let tmp = arr[i - 1];
    arr[i - 1] = arr[j - 1];
    arr[j - 1] = tmp;
}

console.log(arr.join(" "));
