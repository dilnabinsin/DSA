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

//Function Accepting User-defined Type
interface User {
  name: string;
  age: number;
}

function printUser(user: User): void {
  console.log(user.name, user.age);
}

// ✅ Create a User object
const u1: User = {
  name: "Dilna",
  age: 25
};

// ✅ Call the function
printUser(u1);
