const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const reviewNote = new Map();

input.sort().sort((a, b) => b.length - a.length);

for (const word of input) {
    if (word.length >= M) {
        if (reviewNote.has(word))
            reviewNote.set(word, reviewNote.get(word) + 1);
        else reviewNote.set(word, 1);
    }
}

console.log(
    [...reviewNote]
        .sort((a, b) => b[1] - a[1])
        .map((item) => item[0])
        .join("\n")
);
