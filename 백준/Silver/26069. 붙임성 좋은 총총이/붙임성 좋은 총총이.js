const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());

const dancingSet = new Set();
dancingSet.add("ChongChong");

for (const line of input) {
    const [prev, next] = line.split(" ");

    if (
        prev === "ChongChong" ||
        next === "ChongChong" ||
        dancingSet.has(prev) ||
        dancingSet.has(next)
    ) {
        dancingSet.add(prev);
        dancingSet.add(next);
    }
}

console.log(dancingSet.size);
