type Person = {
  name: string;
  age: number;
};

const user = {
  name: "Dilna",
  age: 25,
};

function greet(p: Person) {
  console.log(`Hello, ${p.name}`);
}

greet(user); // ✅ Works because shape matches
