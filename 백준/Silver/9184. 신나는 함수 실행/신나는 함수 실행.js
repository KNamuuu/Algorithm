const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const answer = [];
const dp = Array.from({ length: 21 }, () =>
    Array.from({ length: 21 }, () => Array.from({ length: 21 }, () => 0))
);

for (const line of input) {
    const [a, b, c] = line.split(" ").map(Number);
    if (a === -1 && b === -1 && c === -1) break;

    answer.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}

dp[0][0][0] = 1;

function w(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return 1;
    if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);
    if (dp[a][b][c]) return dp[a][b][c];

    if (a < b && b < c) {
        dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    } else {
        dp[a][b][c] =
            w(a - 1, b, c) +
            w(a - 1, b - 1, c) +
            w(a - 1, b, c - 1) -
            w(a - 1, b - 1, c - 1);
    }

    return dp[a][b][c];
}

console.log(answer.join("\n"));
