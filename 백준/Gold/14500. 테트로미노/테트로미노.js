const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: N }, () => new Array(N).fill(false));
let answer = 0;

function dfs(x, y, count, sum) {
  if (count === 4) {
    answer = Math.max(answer, sum);
    return;
  }

  for (const [dx, dy] of directions) {
    const nextX = x + dx;
    const nextY = y + dy;

    if (
      nextX >= 0 &&
      nextX < N &&
      nextY >= 0 &&
      nextY < M &&
      !visited[nextX][nextY]
    ) {
      if (count === 2) {
        visited[nextX][nextY] = true;
        dfs(x, y, count + 1, sum + map[nextX][nextY]);
        visited[nextX][nextY] = false;
      }

      visited[nextX][nextY] = true;
      dfs(nextX, nextY, count + 1, sum + map[nextX][nextY]);
      visited[nextX][nextY] = false;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited[i][j] = true;
    dfs(i, j, 1, map[i][j]);
    visited[i][j] = false;
  }
}

console.log(answer);
