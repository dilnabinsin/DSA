// Define a base type
type Person = {
  name: string;
  age: number;
};

// Custom utility type to make all properties optional
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Apply the utility type to Person
type OptionalPerson = Optional<Person>;

// ✅ Example usage
const p1: OptionalPerson = {}; // OK, both optional
const p2: OptionalPerson = { name: "Dilna" }; // OK
const p3: OptionalPerson = { age: 24 }; // OK
const p4: OptionalPerson = { name: "Ali", age: 30 }; // OK

console.log("Person 1:", p1);
console.log("Person 2:", p2);
console.log("Person 3:", p3);
console.log("Person 4:", p4);
