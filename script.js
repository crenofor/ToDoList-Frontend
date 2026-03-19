function saveTasks() {
    let tasks = [];

    document.querySelectorAll('#taskList li').forEach(li => {
        let text = li.querySelector('span').textContent;
        let completed = li.querySelector('input').checked;

        tasks.push({
            text: text,
            completed: completed
        });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTask(taskText, completed = false) {
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = completed;

    let span = document.createElement('span');
    span.textContent = taskText;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";

    let listItem = document.createElement('li');

    if (completed) {
        listItem.style.textDecoration = 'line-through';
        listItem.style.color = 'grey';
    }

    checkbox.addEventListener('change', function () {
        listItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        listItem.style.color = checkbox.checked ? 'grey' : '';
        saveTasks();
    });

    deleteBtn.addEventListener('click', function () {
        listItem.remove();
        saveTasks();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(listItem);
}

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    createTask(taskText);
    saveTasks();

    taskInput.value = '';
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        createTask(task.text, task.completed);
    });
}

window.onload = loadTasks;