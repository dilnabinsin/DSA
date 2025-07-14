class Parent {
  constructor(public name: string) {
    console.log(`Parent constructor called by ${name}`);
  }

  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  constructor(name: string) {
    super(name); // Calling parent constructor
  }

  greet() {
    super.greet(); // Calling parent method
    console.log("Hello from Child");
  }
}

const c = new Child("Tom");
c.greet();
// Output:
// Parent constructor called by Tom
// Hello from Parent
// Hello from Child
