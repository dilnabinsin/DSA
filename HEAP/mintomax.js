// Convert Min-Heap to Max-Heap
function convertMinHeapToMaxHeap(minHeap) {
    // Step 1: Negate all elements
    const maxHeapArr = minHeap.map(x => -x);

    // Step 2: Heapify using standard minHeap logic
    buildHeap(maxHeapArr); // use min-heapify logic
    return maxHeapArr.map(x => -x); // Restore original values
}

// Heapify helper function
function heapify(arr, n, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest]) smallest = left;
    if (right < n && arr[right] < arr[smallest]) smallest = right;

    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, n, smallest);
    }
}

// Build heap from array
function buildHeap(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}
let minHeap = [1, 3, 5, 7, 9, 6, 8]; // already a min-heap

console.log("Original Min-Heap:", minHeap);

let maxHeap = convertMinHeapToMaxHeap(minHeap);

console.log("Converted Max-Heap:", maxHeap);

