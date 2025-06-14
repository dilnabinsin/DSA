class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (
            this.minStack.length === 0 ||
            val <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(val);
        }
    }

    pop() {
        let popped = this.stack.pop();
        if (popped === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return popped;
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Example
let mStack = new MinStack();
mStack.push(3);
mStack.push(5);
mStack.push(2);
mStack.push(1);
mStack.pop();
console.log(mStack.getMin()); // 2
