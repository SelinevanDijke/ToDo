// Variabelen
const taskForm = document.getElementById("add-task"); 
const taskText = document.getElementById("add-text");
const taskButton = document.getElementById("add-button");
const deleteButton = document.getElementsByTagName("img");


// Voeg task toe aan POST functie
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(taskText.value);
    const description = taskText.value;
    const toDo = { description } // is hetzelfde als: { description: description }
    const res = await postData(toDo);
    loadData();
});

// Wanneer je op de prullenbak klikt, wordt de task verwijderd
// data.forEach((task) => {
//     deleteButton.addEventListener('click', () => {
//         console.log(deleteButton.id);
//         deleteData(task)
//     });
// });

// data.forEach((task) => {
//   const deleteImage = document.createElement('img');
//   ... 
//   deleteImage.addEventListener('click', () => { deleteData(task); }
//   output += ...
// }