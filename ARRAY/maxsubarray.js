function maxSumSubarray(arr, k) {
  let maxSum = 0, windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Example: Output => 12
console.log(maxSumSubarray([1, 4, 2, 10, 2, 3, 1], 4));
