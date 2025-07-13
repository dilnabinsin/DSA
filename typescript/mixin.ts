type Constructor<T = {}> = new (...args: any[]) => T;

function Flyer<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    fly() {
      console.log("Flying");
    }
  };
}

function Swimmer<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    swim() {
      console.log("Swimming");
    }
  };
}

class AnimalBase {}

class Bird extends Flyer(Swimmer(AnimalBase)) {}

const bird = new Bird();
bird.fly();   // Flying
bird.swim();  // Swimming


//////////////////////////////////////////////////

type Constructor<T = {}> = new (...args: any[]) => T;

function CanFly<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    fly() {
      console.log("Flying");
    }
  };
}

function CanSwim<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    swim() {
      console.log("Swimming");
    }
  };
}
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Duck extends CanFly(CanSwim(Animal)) {}

const d = new Duck("Donald");
console.log(d.name); // Donald
d.fly();             // Flying
d.swim();            // Swimming


