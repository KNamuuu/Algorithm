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
let answer = 0;

let maxHeight = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    maxHeight = Math.max(maxHeight, map[i][j]);
  }
}

function bfs(x, y, visited) {
  const queue = [[x, y]];
  visited[x][y] = true;

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        !visited[nx][ny] &&
        map[nx][ny] > 0
      ) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }
}

function meltIce() {
  const melt = Array.from({ length: N }, () => new Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] > 0) {
        let seaCount = 0;

        for (const [dx, dy] of directions) {
          const nx = i + dx;
          const ny = j + dy;

          if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 0) {
            seaCount++;
          }
        }

        melt[i][j] = seaCount;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] > 0) map[i][j] = Math.max(map[i][j] - melt[i][j], 0);
    }
  }
}

function checkIcebreg() {
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));

  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] > 0 && !visited[i][j]) {
        count++;
        bfs(i, j, visited);
      }
    }
  }

  return count;
}

let year = 0;
while (true) {
  year++;
  meltIce();

  const icebergs = checkIcebreg();
  if (icebergs === 0) break;
  else if (icebergs > 1) {
    answer = year;
    break;
  }
}

console.log(answer);
