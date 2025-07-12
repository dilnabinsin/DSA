interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Circle;

function getArea(shape: Shape): number {
  if (shape.kind === "square") {
    return shape.size * shape.size;
  } else {
    return Math.PI * shape.radius ** 2;
  }
}
