const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const answer = [];

for (const line of input) {
  const array = line.split(" ").map(Number);
  const T = array.shift();

  answer.push(T + " " + getMovementWithInsertSort(array));
}

function getMovementWithInsertSort(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        sum++;
      }
    }
  }

  return sum;
}

console.log(answer.join("\n"));
