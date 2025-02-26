const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [K, N] = input.shift().split(" ").map(Number);
const map = input.map(Number).sort((a, b) => a - b);

let start = 1;
let end = map[map.length - 1] - map[0];

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  if (check(mid)) start = mid + 1;
  else end = mid - 1;
}

function check(dist) {
  let prev = map[0];
  let cnt = 1;

  for (let i = 1; i < K; i++) {
    if (prev + dist <= map[i]) {
      cnt++;
      prev = map[i];
      if (cnt >= N) return true;
    }
  }

  return false;
}

console.log(end);
