const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const map = input.map((line) => line.split("").map(Number));
const visited = Array.from({ length: N }, () => new Array(N).fill(false));
const answer = [];

const directions = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

const queue = [];

function bfs() {
  let count = 1;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        map[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        count++;
      }
    }
  }

  return count;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      visited[i][j] = true;
      queue.push([i, j]);
      answer.push(bfs());
    }
  }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));
