//Method Overriding and Overloading
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

const dog = new Dog();
dog.speak(); // Dog barks
