function removeDuplicates(str) {
  const seen = new Set();
  let result = "";
  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }
  return result;
}

// Output: 'Misp'
console.log(removeDuplicates("Mississippi"));
