// Var
const taskForm = document.getElementById("add-task"); 
const taskText = document.getElementById("add-text");
const taskButton = document.getElementById("add-button");

// Send task to POST function
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(taskText.value);
    const description = taskText.value;
    const toDo = { description }
    const res = await postData(toDo);
    loadData();
});

// Add the data to the DOM
const addToDom = async (data) => {
    const toDoList = document.getElementById("todo-list");
    data.forEach((task) => {

      const deleteImage = document.createElement('img');
      const item = document.createElement("li");
      deleteImage.id = task._id;
        
      item.classList.add("task-item");
      deleteImage.src = 'bin.png';
      item.innerHTML = task.description;
      toDoList.appendChild(item); 
      item.appendChild(deleteImage);

        deleteImage.addEventListener("click", (event) => {
            const idToDelete = event.target.id;
            console.log('deleteImage.id: ', idToDelete);
            deleteData(idToDelete);
            console.log(`Delete ${task.description}`);
        });
    });
}; 

    

