let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// let input = fs.readFileSync("./input.txt").toString().split(" ");

let [N, M] = input.map((el) => parseInt(el));
let visited = new Array(N).fill(false);
let result = [];
let answer = "";

function dfs(idx, cnt) {
  if (cnt === M) {
    // console.log(result.join(" "));
    answer += `${result.join(" ")}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    result.push(i + 1);
    dfs(i, cnt + 1);
    result.pop();
  }
}

dfs(0, 0);

console.log(answer);
