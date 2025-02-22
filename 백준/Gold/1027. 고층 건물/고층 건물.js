// 1. 하나의 빌딩에서 각 빌딩까지의 기울기를 전부 구함.
// 2. 기준이 되는 빌딩부터 앞으로, 뒤로 각각 탐색하며 최소/최고기울기를 갱신할 때 마다 count++
//    이때, 앞으로 탐색할 때는 최소 기울기, 뒤로 탐색할 때는 최고기울기를 판단.
// 3. 모든 빌딩을 대상으로 탐색하며 최대값 찾기.

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const buildings = input.shift().split(" ").map(Number);
let answer = 0;

for (let i = 0; i < N; i++) {
  let max = -Infinity;
  let min = Infinity;
  let count = 0;

  for (let j = i; j >= 0; j--) {
    const slope = (buildings[i] - buildings[j]) / (i - j);

    if (slope < min) {
      count++;
      min = slope;
    }
  }

  for (let j = i; j < N; j++) {
    const slope = (buildings[i] - buildings[j]) / (i - j);

    if (slope > max) {
      count++;
      max = slope;
    }
  }

  answer = Math.max(answer, count);
}

console.log(answer);
