const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input.shift().split(" ").map(Number);
const maze = input.map((line) => line.split(""));
const fireTime = Array.from({ length: R }, () => new Array(C).fill(Infinity));
const visited = Array.from({ length: R }, () => new Array(C).fill(false));

let fire = [];
let jihoon;
let answer = 0;
let canEscape = false;

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (maze[i][j] === "F") {
      fire.push([i, j, 0]);
      fireTime[i][j] = 0;
    } else if (maze[i][j] === "J") {
      jihoon = [i, j, 1];
      visited[i][j] = true;
    }
  }
}

const directions = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

while (fire.length > 0) {
  const [x, y, time] = fire.shift();

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (
      nx >= 0 &&
      nx < R &&
      ny >= 0 &&
      ny < C &&
      maze[nx][ny] !== "#" &&
      fireTime[nx][ny] > time + 1
    ) {
      fireTime[nx][ny] = time + 1;
      fire.push([nx, ny, time + 1]);
    }
  }
}

const queue = [jihoon];

while (queue.length > 0) {
  const [x, y, time] = queue.shift();

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (
      nx >= 0 &&
      nx < R &&
      ny >= 0 &&
      ny < C &&
      !visited[nx][ny] &&
      fireTime[nx][ny] > time &&
      maze[nx][ny] !== "#"
    ) {
      queue.push([nx, ny, time + 1]);
      visited[nx][ny] = true;
    }
  }

  if (x === 0 || x === R - 1 || y === 0 || y === C - 1) {
    canEscape = true;
    answer = time;
    break;
  }
}

console.log(canEscape ? answer : "IMPOSSIBLE");
