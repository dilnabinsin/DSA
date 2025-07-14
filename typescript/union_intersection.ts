// Union Type
type StringOrNumber = string | number;
let value: StringOrNumber = 42;
value = "hello";

// Intersection Type
type A = { name: string };
type B = { age: number };
type AB = A & B;

const person: AB = { name: "Alice", age: 30 };



