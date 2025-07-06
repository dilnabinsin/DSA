function longestRepeating(str) {
  let maxChar = "", maxCount = 0, count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count > maxCount) {
      maxCount = count;
      maxChar = str[i];
    }
  }

  return { char: maxChar, count: maxCount };
}

// Output: { char: 's', count: 3 }
console.log(longestRepeating("aaabbbbcccsss"));

