// Variabelen
const taskForm = document.getElementById("add-task"); 
const taskText = document.getElementById("add-text");
const taskButton = document.getElementById("add-button");
const toDoList = document.getElementById("todo-list");

// Send task to POST function
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(taskText.value);
    const description = taskText.value;
    const toDo = { description }
    const res = await postData();
    loadData().then(data => addToDom(data));
});

// Add the data to the DOM
const addToDom = async (data) => {

    toDoList.innerHTML = '';

    data.forEach((task) => {
        
        const item = document.createElement("li");
        item.innerHTML = '';

        const deleteImage = document.createElement('img');
        deleteImage.id = task._id;
                
        item.classList.add("task-item");
        deleteImage.src = 'css/bin.png';
        item.innerHTML = task.description;
        toDoList.appendChild(item);
        item.appendChild(deleteImage);
        
        deleteImage.addEventListener("click", (event) => {

            const idToDelete = event.target.id;
            toDoList.removeChild(item);
            item.innerHTML = '';
            console.log(`Verwijder ${task.description}`);
            deleteData(idToDelete);
            loadData();
        });
    
    });
}; 
loadData().then(data => addToDom(data));