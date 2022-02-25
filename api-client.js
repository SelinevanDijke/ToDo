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

  // Voeg de data toe aan de DOM
  const toDoList = document.getElementById("todo-list");
  let output = '';

    data.forEach((task) => {
      const deleteImage = document.createElement('img');
      output += `<div id="task-item">
                <li>${task.description}</li> 
                  <img src="bin.png">              
                </div>`;
      deleteImage.addEventListener('click', () => {
        deleteData(task);
      });

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


// DELETE functie
const deleteData = async () => {
  const id = task.id
  fetch(baseUrl + id, {
    method: 'DELETE'
  })
};


