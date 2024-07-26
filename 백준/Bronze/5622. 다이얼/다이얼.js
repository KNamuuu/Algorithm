const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const arr = [
    [],
    [],
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"],
    ["J", "K", "L"],
    ["M", "N", "O"],
    ["P", "Q", "R", "S"],
    ["T", "U", "V"],
    ["W", "X", "Y", "Z"],
];

let answer = 0;

for (const c of input) {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i].includes(c)) {
            answer += i;
        }
    }
}

console.log(answer + input.length);
