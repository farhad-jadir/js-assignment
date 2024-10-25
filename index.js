function addTodo() {
    const todoText = document.getElementById('new-todo').value;
    if (todoText === '') return;
    
    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
    <span>${todoText}</span>
    <div>
    <button class="edit" onclick="editTodoItem(this)">Edit</button>
    <button class="delete" onclick="deleteTodoItem(this)">Delete</button>
    </div>
    `;
    todoList.appendChild(todoItem);
    document.getElementById('new-todo').value = '';
    }
    
    function editTodoItem(button) {
    const todoItem = button.parentElement.parentElement;
    const todoText = todoItem.querySelector('span').innerText;
    const newTodoText = prompt('Edit your to-do', todoText);
    if (newTodoText !== null) {
    todoItem.querySelector('span').innerText = newTodoText;
    }
    }
    
    function deleteTodoItem(button) {
    const todoItem = button.parentElement.parentElement;
    todoItem.remove();
    }
    