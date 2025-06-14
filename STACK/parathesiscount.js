function countInvalidParentheses(s) {
    const stack = [];
    let count = 0;

    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length > 0 && stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                count++; // extra ')'
            }
        }
    }

    count += stack.length; // extra '(' remaining

    return count;
}

// Example
console.log(countInvalidParentheses("((())"));   // 1 (one '(' is unmatched)
console.log(countInvalidParentheses("())())"));  // 2 (two ')' are unmatched)
