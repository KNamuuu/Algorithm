let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// let input = fs.readFileSync("./input.txt").toString().split(" ");

let [N, M] = input.map((el) => parseInt(el));
let visited = new Array(N);
let result = [];
let answer = "";

function dfs(cnt) {
  if (cnt === M) {
    // console.log(result.join(" "));
    answer += `${result.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    result.push(i + 1);
    dfs(cnt + 1);
    result.pop();
  }
}

dfs(0);

console.log(answer);
