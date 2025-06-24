function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;

    // Step 1: Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Step 2: One by one extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        // Swap current root with end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr; // sorted in ascending order
}
let arr = [12, 11, 13, 5, 6, 7];
console.log("Original array:", arr);

let sortedArr = heapSort(arr);
console.log("Sorted array (Heap Sort):", sortedArr);
