// Var
const baseUrl = "HTTP://localhost:3000/";
const myHeaders = {'Content-Type': 'application/json'};

// GET function
const loadData = async () => {
  const res = await fetch(baseUrl, {
    method: 'GET',
    headers: myHeaders
  });
  const data = await res.json();
  console.log(data);
  addToDom(data);
};
loadData(); // Load tasks before refreshing

// POST function
const postData = async () => {
  const obj = {description: taskText.value, done: false}
  fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: myHeaders,
  })
};

// DELETE function
const deleteData = async (idToDelete) => {
  fetch(baseUrl + idToDelete, {
    method: 'DELETE'
  })
  loadData();
};
