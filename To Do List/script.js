// Add task function
document.getElementById('add-task').addEventListener('click', function () {
    let taskText = document.getElementById('new-task').value;

    if (taskText.trim() !== '') {
        let li = document.createElement('li');
        li.innerHTML = `${taskText} <button class="delete-task">x</button>`;
        document.getElementById('task-list').appendChild(li);
        document.getElementById('new-task').value = '';

        // Delete task functionality
        li.querySelector('.delete-task').addEventListener('click', function () {
            li.remove();
        });
    }
});

// Clear all tasks (Trash Bin)
document.getElementById('clear-tasks').addEventListener('click', function () {
    document.getElementById('task-list').innerHTML = '';
});
