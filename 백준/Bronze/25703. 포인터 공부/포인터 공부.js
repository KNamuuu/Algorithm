const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);

const answer = ["int a;"];

for (let i = 1; i <= N; i++) {
  answer.push(
    `int ${"*".repeat(i)}ptr${i === 1 ? "" : i} = &${
      i === 1 ? "a" : "ptr" + (i === 2 ? "" : i - 1)
    };`
  );
}

console.log(answer.join("\n"));