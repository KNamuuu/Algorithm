const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
if (N === 1) return console.log(0);

const coorX = [];
const coorY = [];

for (const coor of input) {
    const [x, y] = coor.split(" ").map(Number);

    coorX.push(x);
    coorY.push(y);
}

const lengthX = Math.max(...coorX) - Math.min(...coorX);
const lengthY = Math.max(...coorY) - Math.min(...coorY);

console.log(lengthX * lengthY);
