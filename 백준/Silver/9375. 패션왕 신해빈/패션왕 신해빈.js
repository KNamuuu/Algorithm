const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const answer = [];

for (let i = 0; i < N; i++) {
    const T = Number(input.shift());
    const items = input.splice(0, T); // T개의 아이템을 가져옴

    const object = {};

    for (const item of items) {
        const [name, type] = item.split(" ");
        if (object[type]) {
            object[type]++;
        } else {
            object[type] = 1;
        }
    }

    const counts = Object.values(object).map((count) => count + 1);
    const combinations = counts.reduce((a, b) => a * b, 1) - 1;
    answer.push(combinations);
}

console.log(answer.join("\n"));
