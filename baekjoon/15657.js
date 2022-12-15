let fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let [N, M] = input[0].split(" ").map((el) => parseInt(el));
let visited = new Array(N);
let list = input[1].split(" ").sort((a, b) => {
  return a - b;
});
let result = [];
let answer = "";

function dfs(idx, cnt) {
  if (cnt === M) {
    // console.log(result.join(" "));
    answer += `${result.join(" ")}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    result.push(list[i]);
    dfs(i, cnt + 1);
    result.pop();
  }
}

dfs(0, 0);

console.log(answer);
