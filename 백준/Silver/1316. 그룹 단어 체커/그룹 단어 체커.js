const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

input.shift();

let answer = 0;

for (const line of input) {
    const set = new Set();
    const word = line.replace(/([a-z])\1{1,}/g, "$1");

    let check = true;

    for (const c of word) {
        if (set.has(c)) {
            check = false;
        }
        set.add(c);
    }

    if (check) answer++;
}

console.log(answer);
