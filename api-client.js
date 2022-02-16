// Variabelen
const baseUrl = "HTTP://localhost:3000/";
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const createTask = document.getElementById("add-text");
const taskForm = document.getElementById("add-task"); 


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

// Laad de tekst uit de form
const postData = async () => {
   fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(),
      headers: myHeaders
    })
}

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(createTask.value);
  postData();
});


// POST functie



// const data = {description: "Koop kwark", done: false};
// fetch(baseUrl, {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//       "Content-Type": "application/json",
//   },
// });