class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  poll() {
    if (this.heap.length === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);

    while (
      this.heap[parentIdx] &&
      this.heap[index].dist < this.heap[parentIdx].dist
    ) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0;
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx].dist < this.heap[index].dist) ||
      (this.heap[rightIdx] && this.heap[rightIdx].dist < this.heap[index].dist)
    ) {
      let smallerIdx =
        this.heap[rightIdx] &&
        this.heap[rightIdx].dist < this.heap[leftIdx].dist
          ? rightIdx
          : leftIdx;

      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const K = +input.shift();
const graph = Array.from({ length: N + 1 }, () => new Array());

for (const line of input) {
  const [from, to, dist] = line.split(" ").map(Number);
  graph[from].push({ node: to, dist });
}

const visited = new Array(N + 1).fill(false);
const distance = new Array(N + 1).fill(Infinity);
distance[K] = 0;

const minHeap = new MinHeap();
minHeap.add({ node: K, dist: 0 });

while (minHeap.size()) {
  const { node, dist } = minHeap.poll();

  if (visited[node]) continue;
  visited[node] = true;

  const next = graph[node];
  if (next.length === 0) continue;

  for (let i = 0, iter = next.length; i < iter; i++) {
    const { node: nextNode, dist: nextDist } = next[i];

    if (distance[nextNode] > dist + nextDist) {
      distance[nextNode] = dist + nextDist;
      minHeap.add({ node: nextNode, dist: distance[nextNode] });
    }
  }
}

console.log(
  distance
    .slice(1, distance.length)
    .map((e) => (e === Infinity ? "INF" : e))
    .join("\n")
);
