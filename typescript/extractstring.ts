function extractStrings(arr: (string | number | boolean)[]): string[] {
  let result: string[] = [];
  for (let item of arr) {
    if (typeof item === "string") result.push(item);
  }
  return result;
}

console.log(extractStrings(["apple", 1, true, "banana"])); // ["apple", "banana"]