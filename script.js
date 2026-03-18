function addTask() {

    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    let listItem = document.createElement('li');
    listItem.textContent = taskText;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener('click', function () {
        listItem.remove();
    });

    listItem.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(listItem);

    taskInput.value = '';
}
