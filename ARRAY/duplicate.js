function findDuplicates(arr) {
    let map = {};
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            duplicates.push(arr[i]);
        } else {
            map[arr[i]] = 1;
        }
    }

    return [...new Set(duplicates)];
}
console.log(findDuplicates([1, 3, 4, 2, 1, 3, 5])); // Output: [1, 3]

function findDuplicateChars(str) {
    let map = {};
    let duplicates = [];

    for (let char of str) {
        if (map[char]) {
            map[char]++;
            if (map[char] === 2) {
                duplicates.push(char);
            }
        } else {
            map[char] = 1;
        }
    }

    return duplicates;
}
