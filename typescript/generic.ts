
function reverseArray<T>(arr: T[]): T[] {
  return [...arr].reverse();
}
const numbers = [1, 2, 3];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers); // Output: [3, 2, 1]

const names = ["Alice", "Bob", "Charlie"];
const reversedNames = reverseArray(names);
console.log(reversedNames); // Output: ["Charlie", "Bob", "Alice"]
