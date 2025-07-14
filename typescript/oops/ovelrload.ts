function greetPerson(name: string): string;
function greetPerson(age: number): string;
function greetPerson(value: string | number): string {
  if (typeof value === "string") return `Hello, ${value}`;
  else return `You are ${value} years old`;
}

console.log(greetPerson("Alice")); // Hello, Alice
console.log(greetPerson(25));      // You are 25 years old
