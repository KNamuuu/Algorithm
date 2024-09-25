const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const answer = [];

for (const line of input) {
  const [name, age, weight] = line.split(" ");

  if (name === "#" && age === "0" && weight === "0") break;

  if (Number(age) > 17 || Number(weight) >= 80) answer.push(`${name} Senior`);
  else answer.push(`${name} Junior`);
}

console.log(answer.join("\n"));
