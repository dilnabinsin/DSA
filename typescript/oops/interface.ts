interface AddFn {
  (a: number, b: number): number;
}
const add: AddFn = (x, y) => x + y;
///////////////////

interface Person {
  name: string;
  age: number;
}

class Student implements Person {
  constructor(public name: string, public age: number) {}
}
