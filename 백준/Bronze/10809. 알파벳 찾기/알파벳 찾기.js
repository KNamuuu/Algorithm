const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
const arr = new Array(26).fill(-1);

let index = 0;
for (const c of input) {
    const idx = alphabet.indexOf(c);
    if (arr[idx] === -1) arr[idx] = index;
    index++;
}

console.log(arr.join(" "));
