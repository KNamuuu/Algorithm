const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = Number(input.shift());
const numbers = input.shift().split(" ").map(Number);
const operations = input.shift().split(" ").map(Number);

function carculate(a, b, operation) {
    switch (operation) {
        case 0:
            return a + b;
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            return a < 0 ? -Math.floor(-a / b) : Math.floor(a / b);
    }
}

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

function dfs(n, result) {
    if (n === N) {
        max = Math.max(max, result);
        min = Math.min(min, result);
        return;
    }

    for (let i = 0; i < 4; i++) {
        if (operations[i] === 0) {
            continue;
        }

        operations[i]--;
        dfs(n + 1, carculate(result, numbers[n], i));
        operations[i]++;
    }
}

dfs(1, numbers[0]);

console.log(max ? max : 0);
console.log(min ? min : 0);
