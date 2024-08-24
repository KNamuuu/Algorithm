const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const saves = input.splice(0, N).map((save) => save.split(" "));
const saveObject = {};
saves.forEach((save) => {
    const [key, value] = save;
    saveObject[key] = value;
});

const answer = [];

for (const site of input) {
    answer.push(saveObject[site]);
}

console.log(answer.join("\n"));
