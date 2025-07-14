function getGreeting(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, World!"), 1000);
  });
}

getGreeting().then(console.log); // Hello, World!
// Promise Function (Resolve with string, Reject with boolean)
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve("Data loaded");
    } else {
      reject(false);
    }
  });
}
fetchData()
  .then((data) => {
    console.log("Success:", data); // Output: "Success: Data loaded"
  })
  .catch((err) => {
    console.error("Error:", err);
  });
