// Variabelen
const baseUrl = "HTTP://localhost:3000/";
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


// GET functie
const loadData = async () => {
  const res = await fetch(baseUrl, {
    method: 'GET',
    headers: myHeaders
  });
  const data = await res.json();
  console.log(data);
}
loadData();

// POST functie
// const postData = async () => {

// }