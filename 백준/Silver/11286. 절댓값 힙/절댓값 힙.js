class AbsHeap {
    constructor() {
        this.heap = [];
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
        let parentIndex = Math.floor((index - 1) / 2);

        while (
            this.heap[parentIndex] &&
            this._compare(this.heap[index], this.heap[parentIndex])
        ) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    bubbleDown() {
        let index = 0;
        let length = this.heap.length;

        while (true) {
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let swapIndex = null;

            if (leftChildIndex < length) {
                if (this._compare(this.heap[leftChildIndex], this.heap[index]))
                    swapIndex = leftChildIndex;
            }

            if (rightChildIndex < length) {
                if (
                    (swapIndex === null &&
                        this._compare(
                            this.heap[rightChildIndex],
                            this.heap[index]
                        )) ||
                    (swapIndex !== null &&
                        this._compare(
                            this.heap[rightChildIndex],
                            this.heap[leftChildIndex]
                        ))
                )
                    swapIndex = rightChildIndex;
            }

            if (swapIndex === null) break;

            this.swap(index, swapIndex);
            index = swapIndex;
        }
    }

    _compare(a, b) {
        if (Math.abs(a) < Math.abs(b)) return true;
        else if (Math.abs(a) === Math.abs(b) && a < b) return true;

        return false;
    }
}

const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input.shift();
const absHeap = new AbsHeap();
const answer = [];

for (const number of input) {
    if (number === 0) answer.push(absHeap.poll());
    else absHeap.add(number);
}

console.log(answer.join("\n"));
