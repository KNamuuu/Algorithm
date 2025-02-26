const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const directions = [
  [-1, 0, 0],
  [1, 0, 0],
  [0, -1, 0],
  [0, 1, 0],
  [0, 0, -1],
  [0, 0, 1],
];

const [M, N, H] = input.shift().split(" ").map(Number);
const box = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => new Array(M).fill(0))
);
const visited = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => new Array(M).fill(false))
);
let zeroCount = 0;
const tomatoQueue = [];

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    box[i][j] = input.shift().split(" ").map(Number);
  }
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (box[i][j][k] === 1) tomatoQueue.push([k, j, i, 0]);
      else if (box[i][j][k] === 0) zeroCount++;
    }
  }
}

let answer = 0;
let i = 0;

while (tomatoQueue.length > i) {
  const [x, y, z, day] = tomatoQueue[i++];
  visited[z][y][x] = true;
  answer = Math.max(answer, day);

  for (const [dx, dy, dz] of directions) {
    const nx = x + dx;
    const ny = y + dy;
    const nz = z + dz;

    if (
      nx >= 0 &&
      nx < M &&
      ny >= 0 &&
      ny < N &&
      nz >= 0 &&
      nz < H &&
      !visited[nz][ny][nx] &&
      box[nz][ny][nx] === 0
    ) {
      tomatoQueue.push([nx, ny, nz, day + 1]);
      box[nz][ny][nx] = 1;
      zeroCount--;
    }
  }
}

console.log(zeroCount === 0 ? answer : -1);
