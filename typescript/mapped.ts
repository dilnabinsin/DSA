type User = {
  name: string;
  age: number;
};

type ReadonlyUser = {
  [K in keyof User]: Readonly<User[K]>;
};

const u: ReadonlyUser = { name: "Sam", age: 30 };
// u.name = "Tom"; ❌ Error: Cannot assign to read-only property
