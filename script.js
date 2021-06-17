let addTaskButton = document.getElementById("add-task-button");
let listTask = document.querySelector('#task-list');
let inputTask = document.getElementById("input-task");
let toDoList = [
    // .. tasks objects
];

if (localStorage.getItem("tasks")) {
    toDoList = JSON.parse(localStorage.getItem("tasks"));
    taskOnTheScreen();
}

// add task
function addTask() {

    let newTask = {
        listTask: inputTask.value,
        checked: false
    }

    toDoList.push(newTask); 
    taskOnTheScreen();
    //We will use local storage to store the tasks. The localStorage property allows saving key/value pairs right in a web browser.
    localStorage.setItem("tasks", JSON.stringify(toDoList));
}

//task on the screen
function  taskOnTheScreen(){
    let nameTask = '';
    toDoList.forEach(function(item){
    document.getElementById("input-task").value = '';
    nameTask += `
    <li>
        <input type="checkbox" ${item.checked ? 'checked' : ''}>
        <span class="task">${item.listTask}</span>
        <button class="delete-btn" onclick="return this.parentNode.remove();">x</button>
    </li>
    `;
    listTask.innerHTML = nameTask;
    });
}


//Clear All

function clearAll() {
        localStorage.clear();
        while (listTask.firstChild) {         
            listTask.removeChild(listTask.firstChild);
        }    
}



//toggle theme 
function toggleTheme(theme) {
    const body = document.body;
    body.classList.remove('dark', 'light')
    if (theme == 'dark') {
        body.classList.add('dark')
    } else {
        body.classList.add('light')
    }
}




