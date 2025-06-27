class Heap {
    constructor() {
        this.heap = [];
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(index) {
        return 2 * index + 1;
    }

    rightChild(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    buildMaxHeap(array) {
        this.heap = array.slice();
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.maxHeapifyDown(i, this.heap.length);
        }
    }

    buildMinHeap(array) {
        this.heap = array.slice();
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.minHeapifyDown(i, this.heap.length);
        }
    }

    maxHeapifyDown(index, size) {
        let largest = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < size && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right < size && this.heap[right] > this.heap[largest]) {
            largest = right;
        }
        if (largest !== index) {
            this.swap(index, largest);
            this.maxHeapifyDown(largest, size);
        }
    }

    minHeapifyDown(index, size) {
        let smallest = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < size && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < size && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest !== index) {
            this.swap(index, smallest);
            this.minHeapifyDown(smallest, size);
        }
    }

    display() {
        console.log("Heap:", this.heap);
    }
}

// Example usage:
const heap = new Heap();
const array = [4, 10, 3, 5, 1];
heap.buildMaxHeap(array);
heap.display(); // Output: Heap: [10, 5, 3, 4, 1]
heap.buildMinHeap(array);
heap.display(); // Output: Heap: [1, 4, 3, 5, 10]