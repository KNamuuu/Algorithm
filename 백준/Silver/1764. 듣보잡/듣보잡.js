const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const haveNeverHeard = new Set(input.splice(0, N));
const haveNeverSeen = input;
const answer = [];

haveNeverSeen.forEach(
    (person) => haveNeverHeard.has(person) && answer.push(person)
);

console.log(answer.length);
console.log(answer.sort().join("\n"));
