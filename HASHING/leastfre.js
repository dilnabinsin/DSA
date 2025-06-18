function leastFrequent(nums) {
  const freq = {};
  for (let num of nums) freq[num] = (freq[num] || 0) + 1;
  let minCount = Infinity, result;

  for (let num in freq) {
    if (freq[num] < minCount) {
      minCount = freq[num];
      result = num;
    }
  }
  return Number(result);
}

// Output: 1
console.log(leastFrequent([1, 2, 2, 3, 3, 3]));
