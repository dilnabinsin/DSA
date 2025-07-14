class Animal{
    name:string;
    
constructor(name:string){
    this.name=name;
}

makesound(){
    console.log("hai this is parent")
}

}
class dog extends Animal{
    breed:string;
    constructor(name:string,breed:string){
        super(name)
        this.breed =breed
    }
    makesound(){
        console.log("thisis child")
    }
}

const an =new dog("parent","hi")
an.makesound()


///////////////////////////////////////////////////////protected
class A {
  protected greet() {
    console.log("Hello from A");
  }
}

class B extends A {
  callGreet() {
    this.greet(); // ✅ allowed
  }
}
const b =new B()
 b.callGreet()
 //inheritance
 class Animal1 {
  move() {
    console.log("Animal moves");
  }
}

class Dog extends Animal1 {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.move(); // Inherited from Animal ✅
d.bark(); // Own method ✅

//////Implement Multiple Inheritance (via Mixins)
type Constructor<T = {}> = new (...args: any[]) => T;

function CanEat<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    eat() {
      console.log("Eating");
    }
  };
}

function CanWalk<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    walk() {
      console.log("Walking");
    }
  };
}

class Person {}

const Mixed = CanEat(CanWalk(Person));

const p = new Mixed();
p.eat();  // Eating
p.walk(); // Walking

