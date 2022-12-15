let fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let [N, M] = input[0].split(" ").map((el) => parseInt(el));
let visited = new Array(N);

let list = input[1].split(" ").sort((a, b) => {
  return a - b;
});

// console.log(list);
let result = [];
let answer = "";

function dfs(cnt) {
  if (cnt === M) {
    // console.log(result.join(" "));
    answer += `${result.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    result.push(list[i]);
    dfs(cnt + 1);
    result.pop();
  }
}

dfs(0);

console.log(answer);
