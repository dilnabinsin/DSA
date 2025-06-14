class UniqueStack {
    constructor() {
        this.stack = [];
        this.set = new Set();
    }

    push(val) {
        if (!this.set.has(val)) {
            this.stack.push(val);
            this.set.add(val);
        }
    }

    pop() {
        let val = this.stack.pop();
        this.set.delete(val);
        return val;
    }

    display() {
        console.log(this.stack);
    }
}

// Example
let uStack = new UniqueStack();
uStack.push(10)
uStack.push(10);
uStack.push(34);
uStack.push(10);
uStack.display(); // [10, 20]
