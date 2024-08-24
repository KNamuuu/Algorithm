const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = input.shift();
const answer = [];

for (const line of input) {
    const [H, W, N] = line.split(" ").map(Number);

    const floor = N % H || H;
    const roomNumber = Math.ceil(N / H);

    answer.push(floor * 100 + roomNumber);
}

console.log(answer.join("\n"));
