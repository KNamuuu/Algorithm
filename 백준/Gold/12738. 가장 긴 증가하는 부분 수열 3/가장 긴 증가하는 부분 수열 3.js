const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const arr = input.shift().split(" ").map(Number);

const list = [];

for (const num of arr) {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (list[mid] < num) left = mid + 1;
    else right = mid - 1;
  }

  if (left === list.length) list.push(num);
  else list[left] = num;
}

console.log(list.length);
