let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");

// input[0]에서 N, M, V 저장
let [N, M, V] = input[0].split(" ").map((el) => parseInt(el));
// input[0] 제거
input = input.slice(1);

// N + 1개 만큼의 graph, visited 생성
let graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
let visited = [...Array(N + 1)].fill(false);
let result = [];

// 양방향 그래프 입력 노드위치에 1 대입
for (let i of input) {
  let [x, y] = i.split(" ").map((el) => parseInt(el));
  graph[x][y] = 1;
  graph[y][x] = 1;
}

// console.log(graph);
// console.log(visited);

function dfs(v) {
  // v번 노드에 방문을 했으면 return;
  if (visited[v]) {
    return;
  }

  // 방문하지 않았다면 방문 처리 후 결과에 push
  visited[v] = true;
  result.push(v);

  // v번 노드와 연결되어 있는(1이 있는) 노드들 중
  // 방문하지 않은(visited가 false인) 노드가 있다면 재귀 호출
  for (let i = 0; i < graph.length; i++) {
    if (graph[v][i] === 1 && visited[i] === false) {
      dfs(i);
    }
  }
}

function bfs(v) {
  // 큐 생성
  let queue = [];

  // 시작노드 큐에 삽입
  queue.push(v);
  result.push(v);

  // queue가 빌 때 까지
  while (queue.length != 0) {
    let shift = queue.shift();
    // 큐의 첫번째 노드 방문 처리
    visited[shift] = true;
    for (let i = 0; i < graph.length; i++) {
      // 큐의 첫번째였던 노드와 인접하면서(같은 행에 있으면서)
      // 값이 1이고, 방문하지 않은 노드들을 방문처리한다음 queue에 삽입, 결과에도 삽입
      if (graph[shift][i] === 1 && visited[i] === false) {
        visited[i] = true;
        queue.push(i);
        result.push(i);
      }
    }
  }
  return;
}

dfs(V);
console.log(result.join(" "));

// bfs 결과를 위해 visited, result 초기화
visited.fill(false);
result = [];

bfs(V);
console.log(result.join(" "));
