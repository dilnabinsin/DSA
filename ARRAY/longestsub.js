function findLongestIncreasingSubarray(arr) {
    if (arr.length === 0) return [];

    let maxStart = 0;
    let maxLength = 1;

    let start = 0;
    let length = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            length++;
        } else {
            if (length > maxLength) {
                maxLength = length;
                maxStart = start;
            }
            start = i;
            length = 1;
        }
    }

    // Final check in case the longest sequence is at the end
    if (length > maxLength) {
        maxStart = start;
        maxLength = length;
    }

    return arr.slice(maxStart, maxStart + maxLength);
}

// Example usage:
const array = [1, 2, 2, 4, 5, 6, 1, 2, 3, 10];
console.log(findLongestIncreasingSubarray(array)); // Output: [1, 2, 3, 10]
