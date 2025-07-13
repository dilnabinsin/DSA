
//inheritance
class Person {
  constructor(public name: string) {}
  greet(): void {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name: string, public role: string) {
    super(name);
  }

  work(): void {
    console.log(`${this.name} is working as ${this.role}`);
  }
}

const emp = new Employee("Neha", "Developer");
emp.greet();  // Hello, I'm Neha
emp.work();   // Neha is working as Developer

//////////////////////////////////////////////////////////////

//Multi-Level Example:
class A {
  greet() {
    console.log("Hello from A");
  }
}
class B extends A {
  sayHi() {
    console.log("Hi from B");
  }
}
class C extends B {
  shout() {
    console.log("Hey from C");
  }
}

const obj = new C();
obj.greet(); // From A
obj.sayHi(); // From B
obj.shout(); // From C

//Encapsulation
class Account {
  private balance: number = 0;

  deposit(amount: number): void {
    if (amount > 0) this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const acc = new Account();
acc.deposit(100);
console.log(acc.getBalance()); // ✅ 100
// acc.balance = 500; ❌ Error: 'balance' is private

//accesmodifier
class Employee {
  public name: string;
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  showDetails() {
    console.log(`${this.name}, ${this.department}`);
  }
}

class Manager extends Employee {
  showDept() {
    console.log(this.department); // ✅ allowed (protected)
    // console.log(this.salary); // ❌ Error: private
  }
}

const emp = new Employee("Neha", 50000, "HR");
console.log(emp.name);       // ✅ public
 //console.log(emp.salary);  // ❌ private
//console.log(emp.department); // ❌ protected
/////////////////////////////////////////////////////////////////////////////
//abstract
abstract class Vehicle {
  abstract start(): void;

  stop(): void {
    console.log("Vehicle stopped.");
  }
}

class Car extends Vehicle {
  start(): void {
    console.log("Car started.");
  }
}

const myCar = new Car();
myCar.start();  // "Car started"
myCar.stop();   // "Vehicle stopped"
/////////////////////////////////////////////////////////
//Run-Time Polymorphism Example:
class Animal {
  speak(): void {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak(): void {
    console.log("Dog barks");
  }
}

let pet: Animal = new Dog();
pet.speak(); // "Dog barks" → late binding

