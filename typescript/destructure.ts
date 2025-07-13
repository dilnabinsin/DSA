function displayUser({ name, age }: { name: string; age: number }) {
  console.log(`${name} is ${age} years old`);
}

displayUser({ name: "John", age: 30 });
