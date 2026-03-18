function addTask() {

    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    let span = document.createElement('span');
    span.textContent = taskText;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";

    let listItem = document.createElement('li');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            listItem.style.textDecoration = 'line-through';
            listItem.style.color = 'grey';
            listItem.style.backgroundColor = 'transparent';
        } else {
            listItem.style.textDecoration = 'none';
            listItem.style.color = '';
            listItem.style.backgroundColor = '';
        }
    });

    deleteBtn.addEventListener('click', function () {
        listItem.remove();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);


    document.getElementById('taskList').appendChild(listItem);

    taskInput.value = '';
}
