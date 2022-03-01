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

    data.forEach((task) => {
      const deleteImage = document.createElement('img');
      const item = document.createElement("li");
      
      item.classList.add("task-item");
      deleteImage.src = 'bin.png';
      item.innerHTML = task.description;
      toDoList.appendChild(item); 
      item.appendChild(deleteImage);

      deleteImage.addEventListener("click", () => {
          deleteData(task);
          console.log(`Delete ${task.description}`);
       });
      
  });
  
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
const deleteData = async (task) => {
  const id = task._id;
  fetch(baseUrl + id, {
    method: 'DELETE'
  })
};


