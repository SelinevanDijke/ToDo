// Variabelen
const baseUrl = "HTTP://localhost:3000/";
const myHeaders = {'Content-Type': 'application/json'};

// GET functie
const loadData = async () => {
  const res = await fetch(baseUrl, {
    method: 'GET',
    headers: myHeaders
  });
  const data = await res.json();
  console.log(data);
  addToDom(data);
};
loadData(); // Hierdoor worden de taken al ingeladen 

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
