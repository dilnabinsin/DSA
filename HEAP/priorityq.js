class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            index > 0 &&
            this.heap[this.getParentIndex(index)].priority > this.heap[index].priority
        ) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    heapifyDown(index = 0) {
        let smallest = index;
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        if (
            left < this.heap.length &&
            this.heap[left].priority < this.heap[smallest].priority
        ) smallest = left;

        if (
            right < this.heap.length &&
            this.heap[right].priority < this.heap[smallest].priority
        ) smallest = right;

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    // ✅ Enqueue: add an element with priority
    enqueue(value, priority) {
        this.heap.push({ value, priority });
        this.heapifyUp();
    }

    // ✅ Dequeue: remove and return the element with highest priority
    dequeue() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) return this.heap.pop().value;

        const top = this.heap[0].value;
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return top;
    }

    // ✅ Peek: view element with highest priority
    peek() {
        return this.isEmpty() ? null : this.heap[0].value;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    printQueue() {
        console.log(this.heap.map(e => `${e.value}(${e.priority})`).join(" -> "));
    }
}
const pq = new PriorityQueue();

pq.enqueue("Clean the house", 4);
pq.enqueue("Pay bills", 2);
pq.enqueue("Write report", 5);
pq.enqueue("Reply to emails", 1);

pq.printQueue();  // Output: Reply to emails(1) -> Pay bills(2) -> Write report(5) -> Clean the house(4)

console.log("Dequeued:", pq.dequeue());  // Reply to emails
pq.printQueue();  // Output: Pay bills(2) -> Clean the house(4) -> Write report(5)

console.log("Next item:", pq.peek());  // Pay bills

