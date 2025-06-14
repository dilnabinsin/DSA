function isPalindrome(str) {
    const stack = [];
    for (let ch of str) stack.push(ch);
    let reversed = "";
    while (stack.length) reversed += stack.pop();
    return str === reversed;
}

// Example
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false