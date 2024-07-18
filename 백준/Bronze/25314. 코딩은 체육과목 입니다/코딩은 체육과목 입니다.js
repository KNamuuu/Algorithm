let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();
// let input = fs.readFileSync("./input.txt").toString();

const arr = [];

for (let i = 0; i < Number(input); i += 4) {
    arr.push("long");
}

arr.push("int");

console.log(arr.join(" "));
