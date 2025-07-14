class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }

  show() {
    console.log(`Car brand is ${this.brand}`);
  }
}

const myCar = new Car("Toyota");
myCar.show(); // Car brand is Toyota
