class MinHeap {
    constructor(){
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    peek() {
        return this.heap[0];
    }
    
    push(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;
        
        while (index > 0 && this.heap[index] < this.heap[Math.floor((index - 1) / 2)]){
            const tmp = this.heap[index];
            this.heap[index] = this.heap[Math.floor((index - 1) / 2)];
            this.heap[Math.floor((index - 1) / 2)] = tmp;
            index = Math.floor((index - 1) / 2);
        }
    }
    
    pop() {
        if(this.heap.length === 0) return -1;
        if(this.heap.length === 1) return this.heap.pop();
        
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        
        while (index * 2 + 1 < this.heap.length) {
            let minChildIndex = (index * 2 + 2 < this.heap.length && this.heap[index * 2 + 2] < this.heap[index * 2 + 1] ? index * 2 + 2 : index * 2 + 1);
            
            if(this.heap[index] < this.heap[minChildIndex]) {
                break;
            }
            
            const tmp = this.heap[index];
            this.heap[index] = this.heap[minChildIndex];
            this.heap[minChildIndex] = tmp;
            index = minChildIndex;
        }
        
        return minValue;
    }
}

function solution(scoville, K) {
    var answer = 0;
    
    const minHeap = new MinHeap();
    
    for (const food of scoville) {
        minHeap.push(food);
    }
    
    while (minHeap.size() >= 2 && minHeap.peek() < K) {
        const first = minHeap.pop();
        const second = minHeap.pop();
        const newFood = first + second * 2;
        
        minHeap.push(newFood);
        answer++;
    }
    
    return minHeap.peek() >= K ? answer : -1;
}