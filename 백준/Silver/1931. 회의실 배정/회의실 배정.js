const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const meetings = input
    .map((meeting) => meeting.split(" ").map(Number))
    .sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });

let time = 0;
let answer = 0;

for (const meeting of meetings) {
    if (meeting[0] >= time) {
        answer++;
        time = meeting[1];
    }
}

console.log(answer);
