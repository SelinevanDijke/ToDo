// // Variabelen
const createTask = document.getElementById("add-text");
const taskForm = document.getElementById("add-task"); 

// Laad de data uit de GET functie en laat het zien aan de DOM
const showData = () => {
    setTimeout(() => {
    const toDoList = document.getElementById("todo-list");
        let output = '';
        const data = await res.json();
    data.forEach((task) => {
      output += `<li>${task.description}</li>`;
    });
    toDoList.innerHTML = output;
    }, 2000);
}
showData();
 

// Functie voor de post naar de DOM


 