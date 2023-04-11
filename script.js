const newTaskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      tasks[index].completed = checkbox.checked;
    });

    const label = document.createElement('label');
    label.innerText = task.title;

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click', () => {
      label.contentEditable = true;
      editBtn.classList.remove('edit-btn');
      editBtn.classList.add('save-btn');
      editBtn.innerText = 'Save';
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener('click', () => {
  const newTask = {
    title: newTaskInput.value,
    completed: false,
  };
  tasks.push(newTask);
  newTaskInput.value = '';
  renderTasks();
});

renderTasks();
