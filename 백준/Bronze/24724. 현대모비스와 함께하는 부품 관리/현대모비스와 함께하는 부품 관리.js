const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const answer = [];
const T = Number(input.shift());

// for (let i = 0; i < T; i++) {
//     answer.push(`Material Management ${i + 1}`);
//     const N = Number(input.shift());
//     const [A, B] = input.shift().split(" ").map(Number);

//     for (let j = 0; j < N; j++) {
//         const [u, v] = input.shift().split(" ").map(Number);
//     }
//     answer.push("Classification ---- End!");
// }

// console.log(answer.join("\n"));

for (let i = 0; i < T; i++) {
    answer.push(`Material Management ${i + 1}`);
    answer.push("Classification ---- End!");
}
console.log(answer.join("\n"));
