function reverseQueue(queue) {
  const stack = [];

  // Dequeue all elements and push into the stack
  while (queue.length !== 0) {
    stack.push(queue.shift());
  }

  // Pop all elements from stack and enqueue back to queue
  while (stack.length !== 0) {
    queue.push(stack.pop());
  }

  return queue;
}

// Example usage:
let q = [1, 2, 3, 4, 5];
console.log("Original Queue:", q);
q = reverseQueue(q);
console.log("Reversed Queue:", q);
