// Variabelen
const taskForm = document.getElementById("add-task"); 
const taskText = document.getElementById("add-text");
const taskButton = document.getElementById("add-button");

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
    data.forEach((task) => {

        if (data.includes(task._id) === task._id) {
            console.log("Deze taak bestaat al en kan daardoor niet toe worden gevoegd");
        } else {
            const item = document.createElement("li");
            item.innerHTML = '';

            const deleteImage = document.createElement('img');
            const toDoList = document.getElementById("todo-list");
            deleteImage.id = task._id;
                    
            item.classList.add("task-item");
            deleteImage.src = 'bin.png';
            item.innerHTML = task.description;
            toDoList.appendChild(item);
            item.appendChild(deleteImage);
            
            deleteImage.addEventListener("click", (event) => {

                const idToDelete = event.target.id;
                toDoList.removeChild(item);
                item.innerHTML = '';
                console.log(`Delete ${task.description}`);
                deleteData(idToDelete);
                loadData();
            });
        }
    });
}; 
loadData().then(data => addToDom(data));


 


    

