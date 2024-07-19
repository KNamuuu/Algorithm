let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

const arr = new Array(31).fill(0);

for (const x of input) {
    arr[Number(x)] = 1;
}

for (let i = 1; i <= 30; i++) {
    if (!arr[i]) console.log(i);
}
