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