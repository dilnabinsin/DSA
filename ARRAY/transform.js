function customFormat(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        // Convert uppercase to lowercase manually (ASCII)
        let lowerChar = String.fromCharCode(str.charCodeAt(i) + 32);

        // First character stays uppercase
        result += str[i]; 
        
        // Add lowercase repeated (i) times
        for (let j = 0; j < i; j++) {
            result += lowerChar;
        }

        // Add hyphen if it's not the last character
        if (i !== str.length - 1) {
            result += '-';
        }
    }

    return result;
}

// Example usage:
console.log(customFormat("APPLE"));  // Output: A-pp-ppp-llll-eeeee

// function transform(str) {
//   return str.split('').map((char, i) =>
//     char.toLowerCase().repeat(i + 1).replace(/^./, char.toUpperCase())
//   ).join('-');
// }

// // Output: A-Pp-Ppp-Llll-Eeeee
// console.log(transform("APPLE"));