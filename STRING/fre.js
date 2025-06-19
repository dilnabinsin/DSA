function charFrequency(str) {
  const map = {};
  for (let ch of str) {
    map[ch] = (map[ch] || 0) + 1;
  }
  return map;
}

// Output: { a: 2, b: 1 }
console.log(charFrequency("aba"));
// Convert First Character of String to Uppercase
// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// // Output: Hello
// console.log(capitalize("hello"));