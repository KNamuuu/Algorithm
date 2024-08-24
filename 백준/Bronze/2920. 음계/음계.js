const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

let isAscending = true;
let isDescending = true;

for (let i = 0; i < 8; i++) {
    if (input[i] !== i + 1) {
        isAscending = false;
    }
    if (input[i] !== 8 - i) {
        isDescending = false;
    }
}

if (isAscending) {
    console.log("ascending");
} else if (isDescending) {
    console.log("descending");
} else {
    console.log("mixed");
}
