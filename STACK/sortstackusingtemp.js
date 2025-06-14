function sortStack(stack) {
    let tempStack = [];

    while (stack.length > 0) {
        let temp = stack.pop();

        while (tempStack.length > 0 && tempStack[tempStack.length - 1] < temp) {
            stack.push(tempStack.pop());
        }

        tempStack.push(temp);
    }

    // Copy back to original stack if needed
    while (tempStack.length > 0) {
        stack.push(tempStack.pop());
    }

    return stack;
}

// Example
let st = [3, 1, 4, 2];
console.log(sortStack(st)); // [1, 2, 3, 4]
