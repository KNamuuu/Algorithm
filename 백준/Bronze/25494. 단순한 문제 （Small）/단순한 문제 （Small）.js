const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const answer = [];

for (const line of input) {
  let count = 0;
  const [a, b, c] = line.split(" ").map(Number);

  for (let x = 1; x <= a; x++) {
    for (let y = 1; y <= b; y++) {
      for (let z = 1; z <= c; z++) {
        if (x % y === y % z && y % z === z % x) count++;
      }
    }
  }

  answer.push(count);
}

console.log(answer.join("\n"));
