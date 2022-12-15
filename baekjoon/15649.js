let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// let input = fs.readFileSync("./input.txt").toString().split(" ");

let [N, M] = input.map((el) => parseInt(el));
let visited = new Array(N).fill(false);
let result = [];
let answer = "";

function dfs(cnt) {
  if (cnt === M) {
    // console.log(result.join(" "));
    answer += `${result.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    // if (visited[i] === true) continue;
    if (!visited[i]) {
      visited[i] = true;
      result.push(i + 1);
      dfs(cnt + 1);
      result.pop();
      visited[i] = false;
    }
  }
}

dfs(0);

console.log(answer);
