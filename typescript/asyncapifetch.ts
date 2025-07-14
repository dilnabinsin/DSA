async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  return await response.json();
}

//async await
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Done"), 1000);
  });
}

async function getData() {
  const result = await fetchData();
  console.log(result); // ✅ Done
}
getData();
//Async with Promises or async/await with Proper Error Handling
async function fetchData(): Promise<string> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return JSON.stringify(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return "Error occurred";
  }
}
