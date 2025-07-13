function area(side: number): number;
function area(length: number, breadth: number): number;
function area(a: number, b?: number): number {
  if (b === undefined) return a * a;
  return a * b;
}

console.log(area(5));      // Square: 25
console.log(area(4, 6));   // Rectangle: 24
