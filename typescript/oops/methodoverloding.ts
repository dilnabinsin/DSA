function area(side: number): number;
function area(length: number, breadth: number): number;
function area(a: number, b?: number): number {
  if (b === undefined) return a * a;
  return a * b;
}

console.log(area(5));      // Square: 25
console.log(area(4, 6));   // Rectangle: 24
////////////////////////////////////////////////
function greet(person: string): string;
function greet(person: string, age: number): string;
function greet(person: string, age?: number): string {
  return age ? `Hello ${person}, age ${age}` : `Hello ${person}`;
}
////////////////////////////////////////////////////////////////

// Overloading
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}
const calc = new Calculator();
console.log(calc.add(2, 3));       // 5
console.log(calc.add("A", "B"));   // AB

// Overriding
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}
const pet: Animal = new Dog();
pet.speak(); // Output: Dog barks