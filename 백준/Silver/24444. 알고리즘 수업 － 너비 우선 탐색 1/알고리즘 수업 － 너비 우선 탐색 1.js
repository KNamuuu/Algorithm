let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

// 정점의 수 N (5 ≤ N ≤ 100,000), 간선의 수 M (1 ≤ M ≤ 200,000), 시작 정점 R (1 ≤ R ≤ N)
const [N, M, R] = input
    .shift()
    .split(" ")
    .map((item) => Number(item));

const graph = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N).fill(false);
const answer = new Array(N).fill(0);

for (const line of input) {
    const [u, v] = line.split(" ");
    graph[u].push(v);
    graph[v].push(u);
}

graph.forEach((line) => line.sort((a, b) => a - b));

// bfs(V, E, R) {  # V : 정점 집합, E : 간선 집합, R : 시작 정점
//     for each v ∈ V - {R}
//         visited[v] <- NO;
//     visited[R] <- YES;  # 시작 정점 R을 방문 했다고 표시한다.
//     enqueue(Q, R);  # 큐 맨 뒤에 시작 정점 R을 추가한다.
//     while (Q ≠ ∅) {
//         u <- dequeue(Q);  # 큐 맨 앞쪽의 요소를 삭제한다.
//         for each v ∈ E(u)  # E(u) : 정점 u의 인접 정점 집합.(정점 번호를 오름차순으로 방문한다)
//             if (visited[v] = NO) then {
//                 visited[v] <- YES;  # 정점 v를 방문 했다고 표시한다.
//                 enqueue(Q, v);  # 큐 맨 뒤에 정점 v를 추가한다.
//             }
//     }
// }

let count = 1;
const queue = [];

function bfs(index) {
    visited[index - 1] = true;
    answer[index - 1] = count++;

    queue.push(index);

    while (queue.length > 0) {
        const prev = queue.shift();

        for (const x of graph[prev]) {
            if (!visited[x - 1]) {
                visited[x - 1] = true;
                answer[x - 1] = count++;
                queue.push(x);
            }
        }
    }
}

bfs(R);

console.log(answer.join("\n"));
