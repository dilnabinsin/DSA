type Item = { a: number };

const ab: Item[] = [
  { a: 3 },
  { a: 3 },
  { a: 3 },
  { a: 3 },
  { a: 3 },
];

let sum = 0;

for (let i = 0; i < ab.length; i++) {
  sum += ab[i].a;
}

console.log("Sum of all 'a' values:", sum); // Output: 15
