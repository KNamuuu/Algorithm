const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);

function factorial(num) {
    if (num < 0) return -1;
    if (num === 0 || num === 1) return 1;

    return num * factorial(num - 1);
}

console.log(factorial(N));
