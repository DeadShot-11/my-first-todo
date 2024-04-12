// Get the input field and list
var input = document.getElementById("taskInput");
var list = document.getElementById("taskList");

// Add task function
function addTask() {
    var task = input.value;
    if (task.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var item = document.createElement("div");
    item.classList.add("todo-item");
    item.innerHTML = `
        <span>${task}</span>
        <div class="todo-actions">
            <button onclick="editTask(this)">Edit</button>
            <button onclick="removeTask(this)">Done</button>
        </div>
    `;
    list.appendChild(item);

    input.value = "";
}

// Edit task function
function editTask(btn) {
    var item = btn.parentNode.parentNode;
    var taskSpan = item.querySelector("span");
    var newTask = prompt("Edit task:", taskSpan.innerText);
    if (newTask !== null) {
        taskSpan.innerText = newTask;
    }
}

// Remove task function
function removeTask(btn) {
    var item = btn.parentNode.parentNode;
    list.removeChild(item);
}

// Event listener for adding task
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
