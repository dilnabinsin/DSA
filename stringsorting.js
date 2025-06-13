function mergeSortString(str) {
  if (str.length <= 1) return str;

  const mid = Math.floor(str.length / 2);
  const left = mergeSortString(str.slice(0, mid));
  const right = mergeSortString(str.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = "";
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result += left[i++];
    } else {
      result += right[j++];
    }
  }

  while (i < left.length) result += left[i++];
  while (j < right.length) result += right[j++];

  return result;
}

// Example:
const sorted = mergeSortString("merge");
console.log(sorted); // "eegmr"
