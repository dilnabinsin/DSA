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
