// const task = prompt('Type in a pending task:');
const listContainer = document.getElementById('list');

listContainer.innerHTML += `<li>${task}</li>`;

function handleNewTask() {
  const newTask = prompt('Type in a new task:');
  listContainer.innerHTML += `<li>${newTask}</li>`;
}
