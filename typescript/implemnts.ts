interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} says Woof!`);
  }
}

const dog = new Dog("Max");
dog.speak(); // Max says Woof!
/////////////////////Can You Use Both? Yes!
class LivingThing {
  breathe() {
    console.log("Breathing...");
  }
}

interface Animal {
  eat(): void;
}

class Dog extends LivingThing implements Animal {
  eat() {
    console.log("Dog is eating");
  }
}

const dog = new Dog();
dog.breathe(); // from LivingThing
dog.eat();     // from Animal interface

