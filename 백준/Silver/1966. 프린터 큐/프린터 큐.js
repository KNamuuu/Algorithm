const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const T = +input.shift();
const answer = [];

for (let i = 0; i < T * 2; i += 2) {
    const [N, targetIndex] = input[i].split(" ").map(Number);
    const queue = input[i + 1]
        .split(" ")
        .map((prio, idx) => ({ prio: +prio, idx }));

    let count = 0;
    while (true) {
        const max = Math.max(...queue.map((el) => el.prio));
        const paper = queue.shift();

        if (paper.prio === max) {
            count++;
            if (paper.idx === targetIndex) {
                answer.push(count);
                break;
            }
        } else {
            queue.push(paper);
        }
    }
}

console.log(answer.join("\n"));
