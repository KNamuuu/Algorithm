const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, S] = input.shift().split(" ").map(Number);
const sequence = input.shift().split(" ").map(Number);

let left = 0;
let right = 0;
let sum = 0;
let answer = Infinity;

while (right < N) {
  sum += sequence[right++];

  while (sum >= S) {
    answer = Math.min(answer, right - left);
    sum -= sequence[left++];
  }
}

console.log(answer === Infinity ? 0 : answer);
