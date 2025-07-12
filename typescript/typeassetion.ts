let someValue: unknown = "I am a string";

// Method 1
let strLength1 = (someValue as string).length;

// Method 2
let strLength2 = (<string>someValue).length;

console.log(strLength1); // 14
console.log(strLength2); // 14
