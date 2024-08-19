const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const char1 = input.shift().split("");
const char2 = input.shift().split("");

const dp = Array.from({ length: char1.length + 1 }, () =>
    Array.from({ length: char2.length + 1 }, () => 0)
);

for (let i = 1; i < char1.length + 1; i++) {
    for (let j = 1; j < char2.length + 1; j++) {
        if (char1[i - 1] === char2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
        else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
}

console.log(dp[char1.length][char2.length]);
