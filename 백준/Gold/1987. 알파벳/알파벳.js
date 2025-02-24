const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input.shift().split(" ").map(Number);
const map = input.map((line) => line.split(""));

const visited = Array.from(26).fill(false);
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let answer = 0;

function getAlphabetIdx(alpha) {
  return alpha.charCodeAt() - 65;
}

function dfs(x, y, count) {
  answer = Math.max(answer, count);

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
      const alphabetIdx = getAlphabetIdx(map[nx][ny]);
      if (!visited[alphabetIdx]) {
        visited[alphabetIdx] = true;
        dfs(nx, ny, count + 1);
        visited[alphabetIdx] = false;
      }
    }
  }
}

const startAlphabetIdx = getAlphabetIdx(map[0][0]);
visited[startAlphabetIdx] = true;
dfs(0, 0, 1);

console.log(answer);
