function submitfn(event) {
    event.preventDefault();
   
    var input = document.querySelector('.todo-input');
    var taskName = input.value.trim();
    
    if (taskName !== '') {
        addTask(taskName);
        input.value = '';
    }
}

function addTask(taskName) {
    // Create new list item
    var listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    
    // Create task text span
    var taskText = document.createElement('span');
    taskText.textContent = taskName;
    listItem.appendChild(taskText);
    
    // Create complete button
    var completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = 'Complete';
    listItem.appendChild(completeBtn);
    
    // Create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('trash-btn');
    deleteBtn.textContent = 'Delete';
    listItem.appendChild(deleteBtn);
    
    // Add list item to the list
    var todoList = document.querySelector('.todo-list');
    todoList.appendChild(listItem);
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('complete-btn')) {
        toggleCompleted(event.target);
    } else if (event.target.classList.contains('trash-btn')) {
        deleteTask(event.target);
    }
});

function toggleCompleted(completeBtn) {
    var listItem = completeBtn.parentElement;
    listItem.classList.toggle('strike');
}

function deleteTask(deleteBtn) {
    var listItem = deleteBtn.parentElement;
    listItem.remove();
}