// Variabelen
const baseUrl = "HTTP://localhost:3000/";
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// const data = { description: "Koop melk", done: false };
// fetch(baseUrl, {
//     method: "POST",
//     headers: myHeaders,
//     body: JSON.stringify(data)
// });
// console.log(data)

const LoadData = async () => {
  const res = await fetch("http://localhost:3000/", {
        method: 'GET',
        headers: myHeaders
  });
    console.log(res);
}
LoadData();



