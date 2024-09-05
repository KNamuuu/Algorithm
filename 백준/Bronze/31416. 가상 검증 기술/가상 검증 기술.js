const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = input.shift();
const answer = [];

for (const line of input) {
    const [Ta, Tb, Va, Vb] = line.split(" ").map(Number);
    let min = Infinity;

    for (let i = 0; i < Va + 1; i++) {
        const time_s = Ta * i;
        const time_d = Ta * (Va - i) + Tb * Vb;
        const max_time = Math.max(time_s, time_d);
        min = Math.min(max_time, min);
    }

    answer.push(min);
}
console.log(answer.join("\n"));
