//Reverse an Array (Generic Function)
function reverseArray<T>(arr: T[]): T[] {
  let result: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseArray([1, 2, 3])); // [3,2,1]
 //Sum of Two Numbers
function sum<T extends number>(a: T, b: T): number {
  return a + b;
}

console.log(sum(10, 5)); // 15
//Accept Two Different Data Types and Return Them in an Array
function toArray<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

console.log(toArray("hello", 10)); // ['hello', 10]
