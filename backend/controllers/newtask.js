// Get DOM elements
const taskList = document.getElementById('tasks');
const addTaskForm = document.getElementById('add-task-form');
const taskTitleInput = document.getElementById('task-title');
const taskDueDateInput = document.getElementById('task-due-date');

// Task data (This will later be replaced by a database or backend logic)
let tasks = [];

// Add task function
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = taskTitleInput.value.trim();
    const dueDate = taskDueDateInput.value;

    if (title) {
        const newTask = {
            id: Date.now(),
            title: title,
            dueDate: dueDate,
            completed: false
        };
        tasks.push(newTask);
        renderTasks();
        addTaskForm.reset(); // Reset form inputs
    } else {
        alert('Please fill out all fields.');
    }
});

// Render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the list
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        // Add the 'completed' class only if the task is marked as completed
        task.completed && taskItem.classList.add('completed');
        taskItem.innerHTML = `
            <span>${task.title} - ${task.dueDate}</span>
            <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Delete task function
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// Toggle completion
function toggleCompletion(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

// Initial render
renderTasks();
