class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    // 🔼 Heapify Up
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            [this.heap[this.getParentIndex(index)], this.heap[index]] =
                [this.heap[index], this.heap[this.getParentIndex(index)]];
            index = this.getParentIndex(index);
        }
    }

    // 🔽 Heapify Down
    heapifyDown(index = 0) {
        let smallest = index;
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;

        if (smallest !== index) {
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            this.heapifyDown(smallest);
        }
    }

    // ➕ Insertion
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // ➖ Deletion (Remove Min)
    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    // 🧾 Get Heap Array
    getHeap() {
        return this.heap;
    }

    // 🔁 Convert to Max Heap
  

    buildHeap() {
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    // ❌ Delete Arbitrary Node
    deleteNode(value) {
        const index = this.heap.indexOf(value);
        if (index === -1) return;
        this.heap[index] = this.heap.pop();
        this.heapifyDown(index);
    }

    // 📌 Find Right Child
    getRightChild(index) {
        const right = this.getRightChildIndex(index);
        return right < this.heap.length ? this.heap[right] : null;
    }
}
const heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(8);
heap.insert(1);
heap.insert(9);

console.log("Heap:", heap.getHeap()); // [1, 3, 8, 5, 9]
console.log("Right child of index 0:", heap.getRightChild(0));
console.log("Removed:", heap.remove()); // 1
console.log("Heap after removal:", heap.getHeap()); // [3, 5, 8, 9]

heap.deleteNode(5);
console.log("Heap after deleting 5:", heap.getHeap()); // [3, 9, 8]

 // 8 or 9 depending on structure



