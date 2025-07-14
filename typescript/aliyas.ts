type Point = {
  x: number;
  y: number;
};

const pointA: Point = { x: 10, y: 20 };
///
let user: {
  name: string;
  greet: () => void;
} = {
  name: "Dilna",
  greet: () => {
    console.log("Hello, I am " + user.name);
  }
};

user.greet(); // Hello, I am Dilna
