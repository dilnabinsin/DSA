
function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i++]);
    } else {
      merged.push(arr2[j++]);
    }
  }

  while (i < arr1.length) merged.push(arr1[i++]);
  while (j < arr2.length) merged.push(arr2[j++]);

  return merged;
}

// Example:
const mergedArray = mergeSortedArrays([1, 3, 5], [2, 4, 6]);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
