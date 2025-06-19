function firstMissingPositive(nums) {
  const set = new Set(nums);
  for (let i = 1; i <= nums.length + 1; i++) {
    if (!set.has(i)) return i;
  }
}

// Output: 2
console.log(firstMissingPositive([3, 4, -1, 1]));
