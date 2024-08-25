const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const answer = [];
for (const char of input) {
    if (char === char.toLowerCase()) answer.push(char.toUpperCase());
    else answer.push(char.toLowerCase());
}

console.log(answer.join(""));
