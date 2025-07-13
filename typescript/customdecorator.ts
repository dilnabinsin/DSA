
//Create a Custom Decorator
function Logger(constructor: Function) {
  console.log(`Class ${constructor.name} is created`);
}

@Logger
class Product {
  constructor(public name: string) {}
}
//Decorator Compositio
// 


function First() {
  return function (target: any) {
    console.log("First decorator");
  };
}

function Second() {
  return function (target: any) {
    console.log("Second decorator");
  };
}

@First()
@Second()
class Example {}
//Factory Decorators
function LoggerFactory(prefix: string) {
  return function (constructor: Function) {
    console.log(`${prefix} - ${constructor.name}`);
  };
}

@LoggerFactory("LOG")
class Service {}
