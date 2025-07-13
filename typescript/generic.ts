
function reverseArray<T>(arr: T[]): T[] {
  return [...arr].reverse();
}
const numbers = [1, 2, 3];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers); // Output: [3, 2, 1]

const names = ["Alice", "Bob", "Charlie"];
const reversedNames = reverseArray(names);
console.log(reversedNames); // Output: ["Charlie", "Bob", "Alice"]
///
function reverseArray<T>(arr: T[]): T[] {
  const result: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

////
function sum<T extends number>(a: T, b: T): T {
  return (a + b) as T;
}

const result =sum(10,20)
console.log(result)