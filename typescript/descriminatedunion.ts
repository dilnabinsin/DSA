// Define the Circle type with a discriminant property "kind"
type Circle = {
  kind: "circle";
  radius: number;
};

// Define the Square type with a discriminant property "kind"
type Square = {
  kind: "square";
  side: number;
};

// Union type Shape can be either a Circle or a Square
type Shape = Circle | Square;

// Function to calculate area
function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    // TypeScript knows this is a Circle
    return Math.PI * shape.radius ** 2;
  } else {
    // TypeScript knows this is a Square
    return shape.side ** 2;
  }
}

// ✅ Example usage
const circle: Shape = { kind: "circle", radius: 5 };
const square: Shape = { kind: "square", side: 4 };

console.log("Area of Circle:", getArea(circle)); // 78.54...
console.log("Area of Square:", getArea(square)); // 16
