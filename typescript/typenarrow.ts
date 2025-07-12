function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("String ID:", id.toUpperCase());
  } else {
    console.log("Number ID:", id.toFixed(2));
  }
}

function handleInput(input: string | string[]) {
  if (Array.isArray(input)) {
    input.forEach(i => console.log(i));
  } else {
    console.log(input);
  }
}
printId("abc123");
printId(42.543);

handleInput("hello");
handleInput(["apple", "banana"]);