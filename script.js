// Variabelen
const createTask = document.getElementById("add-text");
const taskForm = document.getElementById("add-task"); 
const toDoList = document.getElementById("todo-list");

// Functie voor de post naar de DOM
taskForm.addEventListener("submit", (data) => {
    data.preventDefault();
    arrayFunction();
});

// Stuur de ingevulde data naar de DOM
const arrayFunction = () => {
    const getList = document.getElementById("todo-list");
    const newLi = document.createElement("li");

    getList.appendChild(newLi);
    newLi.innerHTML = createTask.value;
    console.log("To do " + createTask.value);
}
 

