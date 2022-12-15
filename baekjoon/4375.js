let fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => parseInt(el));

// let input = fs
//   .readFileSync("./input.txt")
//   .toString()
//   .split("\n")
//   .map((el) => parseInt(el));

let answer = [];

input.forEach((el) => {
  let tmp = 1;
  let cnt = 1;
  while (tmp % el !== 0) {
    tmp = tmp % el;
    tmp = tmp * 10 + 1;
    cnt++;
  }
  answer.push(cnt);
});

console.log(answer.join("\n"));
