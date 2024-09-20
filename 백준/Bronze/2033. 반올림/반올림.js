const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let number = Number(input);
const length = input.length;

for (let i = 0; i < length - 1; i++) {
    number = Math.round(number / Math.pow(10, i + 1)) * Math.pow(10, i + 1);
}

console.log(number);
