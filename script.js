// Variabelen
const taskForm = document.getElementById("add-task"); 
const taskText = document.getElementById("add-text");
const taskButton = document.getElementById("add-button");

// Voeg task toe aan POST functie
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(taskText.value);
    const description = taskText.value;
    const toDo = { description }
    const res = await postData(toDo);
    loadData();
});

// Voeg de data toe aan de DOM
const addToDom = async (data) => {
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
};

