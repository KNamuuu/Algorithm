const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const tree = Array.from({ length: N + 1 }, () => []);
const parents = Array.from({ length: N + 1 }, () => 0);

for (const line of input) {
    const [a, b] = line.split(" ").map(Number);

    tree[a].push(b);
    tree[b].push(a);
}

const queue = [1];
let front = 0;
parents[1] = -1;

while (front < queue.length) {
    const node = queue[front++];

    for (const child of tree[node]) {
        if (parents[child] === 0) {
            parents[child] = node;
            queue.push(child);
        }
    }
}

const answer = [];
for (let i = 2; i <= N; i++) {
    answer.push(parents[i]);
}

console.log(answer.join("\n"));
