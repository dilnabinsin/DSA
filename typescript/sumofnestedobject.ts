const data = [{ a: 3 }, { a: 3 }, { a: 3 }];
let sum = 0;
for (const item of data) {
  sum += item.a;
}
console.log("Sum:", sum);
