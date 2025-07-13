function myDecorator(target: any) {
  console.log("Decorator applied!");
}

@myDecorator
class MyClass {}


//Class Decorator Example

function Logger(constructor: Function) {
  console.log(`Class created: ${constructor.name}`);
}

@Logger
class Person {
  constructor() {}
}
// Console: Class created: Person

Method Decorator Example

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${methodName} with args: ${args}`);
    return original.apply(this, args);
  };
}

class MathUtil {
  @Log
  add(a: number, b: number) {
    return a + b;
  }
}

const m = new MathUtil();
m.add(3, 4); // Logs method call


//decorate factory
function LogWithPrefix(prefix: string) {
  return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`${prefix}: ${methodName} called`);
      return original.apply(this, args);
    };
  };
}
class Calculator {
  @LogWithPrefix("Debug")
  multiply(x: number, y: number) {
    return x * y;
  }
}
