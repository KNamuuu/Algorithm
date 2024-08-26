const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, winner] = input.shift().split(" ");
const chat = {};
input.forEach((line) => {
    const [name, word] = line.split(" ");
    chat[name] = word;
});
const correct = chat[winner];
let answer = 0;

for (const line of input) {
    const [name, word] = line.split(" ");

    if (name === winner) break;
    if (chat[name] === correct) answer++;
}

console.log(answer);
