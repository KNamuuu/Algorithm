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

const N = +input.shift();
const map = input.map((line) => line.split(" ").map(Number));

let maxHeight = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    maxHeight = Math.max(maxHeight, map[i][j]);
  }
}

function findSafeArea(rain) {
  const area = map.map((row) => [...row]);
  const visited = Array.from({ length: N }, () => new Array(N).fill(false));
  let areaCount = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (area[i][j] <= rain) area[i][j] = -1;
    }
  }

  function checkArea(x, y) {
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        area[nx][ny] > 0
      ) {
        visited[nx][ny] = true;
        checkArea(nx, ny);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (area[i][j] > 0 && !visited[i][j]) {
        areaCount++;
        checkArea(i, j);
        visited[i][j];
      }
    }
  }

  return areaCount;
}

let answer = 0;
for (let i = 0; i < maxHeight; i++) {
  answer = Math.max(answer, findSafeArea(i));
}

console.log(answer);
