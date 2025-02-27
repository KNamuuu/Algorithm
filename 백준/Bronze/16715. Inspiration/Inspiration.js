const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);
let max = 0;
let answer;

for (let i = 2; i <= N; i++) {
  let tmp = N;
  let sum = 0;

  while (tmp > 0) {
    sum += tmp % i;
    tmp = Math.floor(tmp / i);
  }

  if (max < sum) {
    max = sum;
    answer = i;
  }
}

console.log(max, answer);
