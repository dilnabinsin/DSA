function reverseArrayAndElements(arr) {
    let reversedArray = [];

    // Reverse the array manually
    for (let i = arr.length - 1; i >= 0; i--) {
        let word = arr[i];
        let reversedWord = '';

        // Reverse each word manually
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }

        reversedArray[reversedArray.length] = reversedWord;
    }

    return reversedArray;
}

// Example usage:
const input = ["cat", "dog", "bat"];
const output = reverseArrayAndElements(input);
console.log(output); // Output: ["tab", "god", "tac"]
