const addTaskButton = document.getElementById("add-task-button");
const listTask = document.querySelector('#task-list');


// add task
function  addTask(){
    
    let inputTask = document.getElementById("input-task").value;
    if (inputTask.value) return;
    document.getElementById("input-task").value = '';
    let nameTask = `<li>
        <input type="checkbox">
        <span class="task">${inputTask}</span>
        <button class="delete-btn" onclick="return this.parentNode.remove();">x</button>
    </li>`;

    listTask.insertAdjacentHTML('beforeend', nameTask );
};


function control() {
    addTaskButton.addEventListener('click', () => addTask());
}

control();





function toggleTheme(theme) {
    const body = document.body;
    body.classList.remove('dark', 'light')
    if (theme == 'dark') {
        body.classList.add('dark')
    } else {
        body.classList.add('light')
    }
}