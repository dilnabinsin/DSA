function sumAndAverage(...nums: number[]): { sum: number; average: number } {
  let sum = 0;
  for (let num of nums) sum += num;
  return { sum, average: sum / nums.length };
}

console.log(sumAndAverage(10, 20, 30)); // { sum: 60, average: 20 }