const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

// const answer = [];
let coorX = [];
let coorY = [];

for (const coor of input) {
    const [x, y] = coor.split(" ");

    if (!coorX.includes(x)) coorX.push(x);
    else coorX = coorX.filter((el) => el !== x);

    if (!coorY.includes(y)) coorY.push(y);
    else coorY = coorY.filter((el) => el !== y);
}

console.log(`${coorX[0]} ${coorY[0]}`);
