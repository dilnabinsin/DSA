function findDuplicates(students) {
  const seen = new Set();
  const duplicates = [];

  for (let student of students) {
    const key = student.name + student.age;
    if (seen.has(key)) duplicates.push(student);
    else seen.add(key);
  }
  return duplicates;
}

// Example
const studentsList = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 20 },
  { name: "Alice", age: 24 }
];

// Output: [{ name: 'Alice', age: 24 }]
console.log(findDuplicates(studentsList));
