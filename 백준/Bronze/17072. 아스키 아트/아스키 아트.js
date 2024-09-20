function RGB(r, g, b) {
    const intensity = 2126 * r + 7152 * g + 722 * b;

    if (intensity >= 0 && intensity < 510000) return "#";
    else if (intensity >= 510000 && intensity < 1020000) return "o";
    else if (intensity >= 1020000 && intensity < 1530000) return "+";
    else if (intensity >= 1530000 && intensity < 2040000) return "-";
    else return ".";
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.split(" "));

const [N, M] = input.shift().map(Number);
const answer = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        const r = Number(input[i][j * 3]);
        const g = Number(input[i][j * 3 + 1]);
        const b = Number(input[i][j * 3 + 2]);

        answer[i].push(RGB(r, g, b));
    }
}

console.log(answer.map((line) => line.join("")).join("\n"));
