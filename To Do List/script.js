const todoList = document.getElementById('todo-list');
const historyList = document.getElementById('history-list');
let todos = [];
let history = [];

function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    
    if (task !== "") {
        todos.push(task);
        input.value = '';
        renderTodos();
    }
}

function deleteTodo(index) {
    const deletedTask = todos[index];
    todos.splice(index, 1);
    history.push(deletedTask);  // Add deleted task to history
    renderTodos();
    renderHistory();
}

function editTodo(index) {
    const newTask = prompt("Edit your task:", todos[index]);
    
    if (newTask !== null && newTask.trim() !== "") {
        todos[index] = newTask;
        renderTodos();
    }
}

function renderTodos() {
    todoList.innerHTML = '';
    
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todo;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTodo(index);
        
        const deleteButton = document.createElement('button');
        deleteButton.onclick = () => deleteTodo(index);
        
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        
        todoList.appendChild(li);
    });
}

function renderHistory() {
    historyList.innerHTML = '';
    
    history.forEach((todo, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todo;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Forever';
        deleteButton.onclick = () => deleteFromHistory(index);
        
        li.appendChild(span);
        li.appendChild(deleteButton);
        
        historyList.appendChild(li);
    });
}

function deleteFromHistory(index) {
    history.splice(index, 1);
    renderHistory();
}
