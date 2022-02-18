// Variabelen
const baseUrl = "HTTP://localhost:3000/";
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// const taskForm = document.getElementById("add-task"); 

// GET functie
const loadData = async () => {
  const res = await fetch(baseUrl, {
    method: 'GET',
    headers: myHeaders
  });
  const data = await res.json();
  console.log(data);

  // Voeg de data toe aan de DOM
  const toDoList = document.getElementById("todo-list");
  const image = document.createElement('img');
  image.src = "icon.jpeg";

  let output = '';
  data.forEach((task) => {
    output += `<div id="task-item">
              <li>${task.description}</li> 
                <img src="bin.png">              
              </div>`;
  });
  toDoList.innerHTML = output;
}
loadData();

// POST functie
const postData = async (toDo) => {
  const obj = {description: taskText.value, done: false}
  fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: myHeaders,
  })
};









// const data = {description: "Koop melk", done: false};
// fetch(baseUrl, {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//       "Content-Type": "application/json",
//   },
// });