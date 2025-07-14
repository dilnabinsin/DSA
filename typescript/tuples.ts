let rgb: [number, number, number] = [255, 0, 0];
console.log(`Red: ${rgb[0]}, Green: ${rgb[1]}, Blue: ${rgb[2]}`);
//enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}


let move: Direction = Direction.Up;
console.log(move); // 0

//Declaration Merging
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "Tom",
  age: 25
};
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data));