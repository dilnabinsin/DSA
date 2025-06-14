function deleteFromStack(stack, target) {
    const temp = [];

    // Remove all elements and store in temp except target
    while (stack.length > 0) {
        let val = stack.pop();
        if (val !== target) {
            temp.push(val);
        }
    }

    // Push everything back to restore original order (except deleted)
    while (temp.length > 0) {
        stack.push(temp.pop());
    }

    return stack;
}

// Example
let stack = [10, 20, 30, 40, 50]; // top = 50
console.log(deleteFromStack(stack, 30)); // [10, 20, 40, 50]
