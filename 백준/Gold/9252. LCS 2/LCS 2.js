const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const str1 = input[0].split("");
const str2 = input[1].split("");
const len1 = str1.length;
const len2 = str2.length;

const dp = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(0));

for (let i = 1; i <= len1; i++) {
  for (let j = 1; j <= len2; j++) {
    if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
}

const lcsLength = dp[len1][len2];

let i = len1;
let j = len2;
const result = [];

while (i > 0 && j > 0) {
  if (str1[i - 1] === str2[j - 1]) {
    result.push(str1[i - 1]);
    i--;
    j--;
  } else {
    dp[i - 1][j] > dp[i][j - 1] ? i-- : j--;
  }
}

console.log(lcsLength);
console.log(result.reverse().join(""));
