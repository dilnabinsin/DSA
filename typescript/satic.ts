class MathUtils {
  static PI: number = 3.14159;

  static square(num: number): number {
    return num * num;
  }
}

// Access without creating an object
console.log(MathUtils.PI);              // ✅ 3.14159
console.log(MathUtils.square(4));       // ✅ 16
