const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

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
        if (this.heap.length === 0) return 0;
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
            this.heap[index] < this.heap[parentIdx]
        ) {
            this.swap(index, parentIdx);
            index = parentIdx;
            parentIdx = Math.floor((index - 1) / 2);
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftIndex = index * 2 + 1;
            let rightIndex = index * 2 + 2;
            let targetIndex = null;

            if (leftIndex < length)
                if (this.heap[leftIndex] < this.heap[index])
                    targetIndex = leftIndex;

            if (rightIndex < length)
                if (
                    (targetIndex === null &&
                        this.heap[rightIndex] < this.heap[index]) ||
                    (targetIndex !== null &&
                        this.heap[rightIndex] < this.heap[leftIndex])
                )
                    targetIndex = rightIndex;

            if (targetIndex === null) break;

            this.swap(index, targetIndex);
            index = targetIndex;
        }
    }
}

const N = input.shift();
const minHeap = new MinHeap();
const answer = [];

for (const number of input) {
    if (number === 0) answer.push(minHeap.poll());
    else minHeap.add(number);
}

console.log(answer.join("\n"));
