const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let charge = Number(input);
let answer = 0;

while (charge > 0) {
  if (charge === 1 || charge === 3) {
    answer = -1;
    break;
  } else if (charge % 2 === 1 || charge % 5 === 0) {
    charge -= 5;
    answer++;
  } else if (charge % 2 === 0) {
    charge -= 2;
    answer++;
  }
}

console.log(answer);
