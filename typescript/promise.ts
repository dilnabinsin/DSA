function getGreeting(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, World!"), 1000);
  });
}

getGreeting().then(console.log); // Hello, World!
