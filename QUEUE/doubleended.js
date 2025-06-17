class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  // Check if the deque is empty
  isEmpty() {
    return this.front === null;
  }

  // Insert at front
  insertFront(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
  }

  // Insert at rear
  insertRear(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      newNode.prev = this.rear;
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  // Delete from front
  deleteFront() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    const removedValue = this.front.value;
    if (this.front === this.rear) {
      this.front = this.rear = null;
    } else {
      this.front = this.front.next;
      this.front.prev = null;
    }
    return removedValue;
  }

  // Delete from rear
  deleteRear() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    const removedValue = this.rear.value;
    if (this.front === this.rear) {
      this.front = this.rear = null;
    } else {
      this.rear = this.rear.prev;
      this.rear.next = null;
    }
    return removedValue;
  }

  // Peek front
  getFront() {
    return this.isEmpty() ? null : this.front.value;
  }

  // Peek rear
  getRear() {
    return this.isEmpty() ? null : this.rear.value;
  }

  // Display all elements
  display() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return;
    }
    let current = this.front;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log("Deque:", result.join(" <-> "));
  }
}
const deque = new Deque();

deque.insertRear(10);
deque.insertRear(20);
deque.insertFront(5);
deque.insertFront(1);
deque.display();  // Output: 1 <-> 5 <-> 10 <-> 20

deque.deleteFront();
deque.display();   // Removes 1
deque.deleteRear();   // Removes 20
deque.display();      // Output: 5 <-> 10

console.log("Front:", deque.getFront());  // Output: 5
console.log("Rear:", deque.getRear());    // Output: 10
