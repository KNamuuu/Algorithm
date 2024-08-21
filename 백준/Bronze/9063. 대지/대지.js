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

coorX.sort((a, b) => a - b);
coorY.sort((a, b) => a - b);

const lengthX = coorX[coorX.length - 1] - coorX[0];
const lengthY = coorY[coorY.length - 1] - coorY[0];

console.log(lengthX * lengthY);
