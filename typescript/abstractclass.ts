interface Shape {
  getArea(): number;
}

abstract class Polygon implements Shape {
  abstract getArea(): number;

  display(): void {
    console.log("Abstract class method called");
  }
}

class Rectangle extends Polygon {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(10, 20);
rect.display(); // Abstract class method called
console.log(rect.getArea()); // 200

//////Create a Class from Interface
interface User {
  name: string;
  age: number;
}

class Student implements User {
  constructor(public name: string, public age: number) {}

  info(): void {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

const s = new Student("Alice", 25);
s.info(); // Alice is 25 years old
