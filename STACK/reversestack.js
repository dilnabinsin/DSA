class Stack {
  constructor() {
    this.items = [];
    this.reverse = false;
  }

  push(val) {
    this.items.push(val);
  }

  pop() {
    return this.reverse ? this.items.shift() : this.items.pop();
  }
}
