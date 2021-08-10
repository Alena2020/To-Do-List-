"use strict";

let addTaskButton = document.querySelector('#add-task-button');
let removeButtons = document.querySelectorAll('.delete-btn');
let listTask = document.querySelector('#task-list');
let inputTask = document.querySelector('#input-task');
let toDoList = [
    // .. tasks objects
];

function loadLocalStorage() {
    //We will use local storage to store the tasks. The localStorage property allows saving key/value pairs right in a web browser.
    if (localStorage.getItem("tasks")) {
        toDoList = JSON.parse(localStorage.getItem("tasks")) || [];
        showTasks();
    }
}

loadLocalStorage();

function addTask() {

    let newTask = {
        taskName: inputTask.value,
        checked: false
    }

    if (inputTask.value !== "") {
        // Add task to list and localstorage
        toDoList.push(newTask);
        showTasks();
        updateLocalStorage();
    }
}

//Show tasks on the screen
function showTasks() {
    let tasksTemplate = '';

    toDoList.forEach(function(item, index) {
        // Clear input task
        document.getElementById("input-task").value = '';

        tasksTemplate += `
        <li>
            <input type="checkbox" class="check" onclick="checkedTask(${index})" ${item.checked ? 'checked' : ''}>
            <span class="task">${item.taskName}</span>
            <button class="delete-btn"  onclick="removeTask(${index})">x</button>
        </li>
        `;
    });

    listTask.innerHTML = tasksTemplate;
}

function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(toDoList));
}

function removeTask(index) {
    // Remove  a task from local storage
    toDoList.splice(index, 1);
    updateLocalStorage();
    showTasks();

    // Remove  a task from from list
    return this.parentNode.remove();
}

// Update state of task and save to local storage
function checkedTask(index) {
    toDoList[index].checked = !toDoList[index].checked;
    updateLocalStorage();
    showTasks();
}

function clearAll() {
    localStorage.clear();
    while (listTask.firstChild) {
        listTask.removeChild(listTask.firstChild);
    }
}

function toggleTheme(theme) {
    const body = document.body;
    body.classList.remove('dark', 'light')
    if (theme == 'dark') {
        body.classList.add('dark')
    } else {
        body.classList.add('light')
    }
}