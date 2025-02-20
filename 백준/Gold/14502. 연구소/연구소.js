const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((line) => line.split(" ").map(Number));

const empty = [];
const virus = [];
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 0) empty.push([i, j]);
    else if (map[i][j] === 2) virus.push([i, j]);
  }
}

for (let i = 0; i < empty.length; i++) {
  for (let j = i + 1; j < empty.length; j++) {
    for (let k = j + 1; k < empty.length; k++) {
      const tmpMap = JSON.parse(JSON.stringify(map));

      tmpMap[empty[i][0]][empty[i][1]] = 1;
      tmpMap[empty[j][0]][empty[j][1]] = 1;
      tmpMap[empty[k][0]][empty[k][1]] = 1;

      const tmpVirus = JSON.parse(JSON.stringify(virus));
      let count = 0;

      while (tmpVirus.length > 0) {
        const [currentX, currentY] = tmpVirus.shift();

        for (const [dx, dy] of directions) {
          const nextX = currentX + dx;
          const nextY = currentY + dy;

          if (
            nextX >= 0 &&
            nextX < N &&
            nextY >= 0 &&
            nextY < M &&
            tmpMap[nextX][nextY] === 0
          ) {
            tmpMap[nextX][nextY] = 2;
            count++;
            tmpVirus.push([nextX, nextY]);
          }
        }
      }

      const safeArea = empty.length - count - 3;
      answer = Math.max(safeArea, answer);
    }
  }
}

console.log(answer);
