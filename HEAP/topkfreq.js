// ✅ MinHeap implementation for [frequency, number] pairs
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(pair) {
        this.heap.push(pair);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent][0] > this.heap[index][0]) {
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
                index = parent;
            } else break;
        }
    }

    remove() {
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyDown(index) {
        let smallest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        if (left < this.heap.length && this.heap[left][0] < this.heap[smallest][0])
            smallest = left;
        if (right < this.heap.length && this.heap[right][0] < this.heap[smallest][0])
            smallest = right;

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }

    size() {
        return this.heap.length;
    }

    getElements() {
        return this.heap.map(([freq, num]) => num);
    }
}

// ✅ Main function: Top K Frequent Elements
function topKFrequent(nums, k) {
    const freqMap = new Map();

    // Step 1: Count frequencies
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: MinHeap of size k to store [frequency, number]
    const heap = new MinHeap();
    for (let [num, freq] of freqMap.entries()) {
        heap.insert([freq, num]);
        if (heap.size() > k) {
            heap.remove();
        }
    }

    // Step 3: Extract top k frequent numbers
    return heap.getElements();
}

// ✅ Test case
let nums = [1, 1, 1, 2, 2, 3, 3, 3, 4];
let k = 2;

console.log("Top", k, "frequent elements:", topKFrequent(nums, k));
