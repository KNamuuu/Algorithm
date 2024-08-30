const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const T = Number(input.shift());
const answer = [];

for (let i = 0; i < T * 3; i += 3) {
    const commands = input[i].split("");
    const N = Number(input[i + 1]);
    const arr = JSON.parse(input[i + 2]);

    let start = 0;
    let end = arr.length - 1;
    let isError = false;
    let isReverse = false;

    for (const command of commands) {
        if (command === "R") isReverse = !isReverse;
        else if (command === "D") {
            if (start > end) isError = true;
            !isReverse ? (start += 1) : (end -= 1);
        }
    }

    isError
        ? answer.push("error")
        : answer.push(
              !isReverse
                  ? JSON.stringify(arr.slice(start, end + 1))
                  : JSON.stringify(arr.slice(start, end + 1).reverse())
          );
}

console.log(answer.join("\n"));
