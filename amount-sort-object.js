function mergeSortByAmount(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = [];
  const right = [];

  for (let i = 0; i < mid; i++) left.push(arr[i]);
  for (let i = mid; i < arr.length; i++) right.push(arr[i]);

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].amount < right[j].amount) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}

// Example usage:
const transactions = [
  { id: 1, amount: 500 },
  { id: 2, amount: 200 },
  { id: 3, amount: 800 }
];

const sorted = mergeSortByAmount(transactions);
console.log(sorted);
