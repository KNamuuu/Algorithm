const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [N, K] = input.map(Number);
let times = Array(100001).fill(Infinity);
let count = Array(100001).fill(0);

const queue = [[N, 0]];
times[N] = 0;
count[N] = 1;

while (queue.length > 0) {
    const [current, time] = queue.shift();

    for (const next of [current - 1, current + 1, current * 2]) {
        if (next >= 0 && next < 100001) {
            if (times[next] > time + 1) {
                times[next] = time + 1;
                count[next] = count[current];
                queue.push([next, time + 1]);
            } else if (times[next] === time + 1) {
                count[next] += count[current];
            }
        }
    }
}

console.log(times[K]);
console.log(count[K]);
