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
