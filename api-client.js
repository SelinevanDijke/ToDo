// Variabelen
const baseUrl = "HTTP://localhost:3000/";
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// GET functie
const LoadData = async () => {
  const res =  fetch(baseUrl, {
        method: 'GET',
        headers: myHeaders
  });
    console.log(res);
}
LoadData();

// POST functie
const data = createTask.value;
fetch(baseUrl, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data)
});
console.log(data)