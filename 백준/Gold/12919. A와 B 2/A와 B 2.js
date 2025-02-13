const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(""));

const [S, T] = input;
let answer = 0;

function solution(S, T) {
  if (S.join("") === T.join("")) {
    answer = 1;
    return;
  } else if (T.length < S.length) return;

  if (T[T.length - 1] === "A") solution(S, T.slice(0, -1));
  if (T[0] === "B") solution(S, T.slice(1).reverse());
}

solution(S, T);
console.log(answer);
