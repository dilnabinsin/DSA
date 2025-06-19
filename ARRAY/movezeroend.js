function moveZeroes(arr) {
  let nonZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[nonZero]] = [arr[nonZero], arr[i]];
      nonZero++;
    }
  }
  return arr;
}

// Output: [1,3,12,0,0]
console.log(moveZeroes([0, 1, 0, 3, 12]));