const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const m = +input.shift();
const buses = input.map((bus) => bus.split(" ").map(Number));

const map = Array.from({ length: n + 1 }, () =>
  new Array(n + 1).fill(Infinity)
);

for (const [a, b, c] of buses) {
  map[a][b] = Math.min(map[a][b], c);
}
for (let k = 1; k < n + 1; k++) {
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (map[i][k] + map[k][j] < map[i][j] && i !== j) {
        map[i][j] = map[i][k] + map[k][j];
      }
    }
  }
}

for (let i = 0; i < n + 1; i++) {
  for (let j = 0; j < n + 1; j++) {
    if (map[i][j] === Infinity) map[i][j] = 0;
  }
}

console.log(
  map
    .slice(1)
    .map((line) => line.slice(1).join(" "))
    .join("\n")
);
