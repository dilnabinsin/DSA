function findUncommon(arr1, arr2) {
  const map = {};
  arr1.forEach(x => map[x] = (map[x] || 0) + 1);
  arr2.forEach(x => map[x] = (map[x] || 0) + 1);

  return Object.keys(map).filter(k => map[k] === 1).map(Number);
}

// Output: [1, 2, 6, 7]
console.log(findUncommon([1, 2, 3, 4], [3, 4, 6, 7]));
