let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

let [N, M] = input[0].split(" ").map((el) => parseInt(el));

let visited = new Array(N);

let list = input[1].split(" ").sort((a, b) => {
  return a - b;
});

// console.log(list);
let result = [];

function dfs(idx, cnt) {
  if (cnt === M) {
    console.log(result.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    // if (visited[i] === true) continue;
    if (!visited[i]) {
      visited[i] = true;
      result.push(list[i]);
      dfs(i, cnt + 1);
      result.pop();
      visited[i] = false;
    }
  }
}

dfs(0, 0);
