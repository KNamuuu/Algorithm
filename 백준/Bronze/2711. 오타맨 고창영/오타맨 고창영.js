const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const T = input.shift();
const answer = [];

for (const line of input) {
    let [index, word] = line.split(" ");
    index = Number(index);
    word = word.split("");
    word.splice(index - 1, 1);

    answer.push(word.join(""));
}

console.log(answer.join("\n"));
