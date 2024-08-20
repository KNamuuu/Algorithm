const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const answer = [];

function recursion(s, l, r, count) {
    count++;

    if (l >= r) return [1, count];
    else if (s[l] !== s[r]) return [0, count];
    else return recursion(s, l + 1, r - 1, count);
}

function isPalindrome(s) {
    return recursion(s, 0, s.length - 1, 0);
}

for (const char of input) {
    answer.push(isPalindrome(char).join(" "));
}

console.log(answer.join("\n"));
