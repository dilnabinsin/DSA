function mergeSortObjects(arr, key) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSortObjects(arr.slice(0, mid), key);
  const right = mergeSortObjects(arr.slice(mid), key);

  return merge(left, right, key);
}

function merge(left, right, key) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i][key] < right[j][key]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}

// Example:
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

const sortedByAge = mergeSortObjects(people, "age");
console.log(sortedByAge);
