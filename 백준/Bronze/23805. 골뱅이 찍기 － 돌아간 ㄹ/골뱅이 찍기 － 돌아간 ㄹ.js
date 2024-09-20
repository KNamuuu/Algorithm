const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);

for (let i = 0; i < N; i++) {
    console.log("@".repeat(3 * N) + " ".repeat(N) + "@".repeat(N));
}
for (let i = 0; i < N * 3; i++) {
    console.log("@".repeat(N) + (" ".repeat(N) + "@".repeat(N)).repeat(2));
}
for (let i = 0; i < N; i++) {
    console.log("@".repeat(N) + " ".repeat(N) + "@".repeat(3 * N));
}
