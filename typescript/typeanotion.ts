function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(3, 4)); // 12

let scores: number[] = [90, 80, 70];

let student: { name: string; age: number } = {
  name: "Ali",
  age: 22
};

//////////////////////////
function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Dilna")); // Hello, Dilna