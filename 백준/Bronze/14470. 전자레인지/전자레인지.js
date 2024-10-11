const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let [A, B, C, D, E] = input;
let answer = 0;
let isFrozen = true;

while (A !== B) {
  if (A < 0) {
    answer += C;
    A++;
    continue;
  } else if (A === 0 && isFrozen) {
    answer += D;
    isFrozen = false;
  } else {
    answer += E;
    A++;
  }
}

console.log(answer);
