// plus button to show input field for adding a task
const taskAddButton = document.getElementById("createOne");
// inputfield
const taskInput = document.getElementById("inputTask");
// create button
const taskCreate = document.getElementById("addTask");



// set a variables to localstorage to store tasks
if (localStorage.getItem('Tasks') == null) {
    var taskDetails = {};
} else {
    taskDetails = JSON.parse(localStorage.getItem('Tasks'));
    updateTask(taskDetails);
}

// show the input field and create button
taskAddButton.onclick = () => {
    if (taskInput.className != 'show' && taskCreate.className != 'show') {
        taskInput.className = 'taskinput show';
        taskCreate.className = 'createTask show';
    }
};

// add a new task and hide input field and create button 
taskCreate.onclick = () => {
    var inputvalue = taskInput.value;
    if (inputvalue == '') {
        alert("Please Insert Propare Task Name.");
    } else {
        var totaltasks = Object.keys(taskDetails).length;

        if (totaltasks != 0) {
            taskDetails['task' + (totaltasks + 1)] = [inputvalue, (totaltasks + 1)];

        } else {
            taskDetails['task1'] = [inputvalue, 1];
        }

        localStorage.setItem('Tasks', JSON.stringify(taskDetails));
        if (taskInput.className == 'taskinput show' && taskCreate.className == 'createTask show') {
            taskInput.className = 'taskinput';
            taskCreate.className = 'createTask';
            taskInput.value = "";
        }
    }
    updateTask(taskDetails);
}

// update the board content
function updateTask(taskDetails) {
    document.getElementById("displayallTasks").innerHTML = '';
    for (var item in taskDetails) {
        if (taskDetails[item][0].length >= 30) {
            taskDetails[item][0] = taskDetails[item][0].slice(0, 30) + "...";
        }
        document.getElementById("displayallTasks").innerHTML += '<div class="taskcards" id="task' + taskDetails[item][1] + '" draggable="true" ><span class="cardtext adjust-text" onclick="modalpop(this.parentElement.id)">' + taskDetails[item][0] + '</span><a href="JavaScript:void(0);" id="removetask' + taskDetails[item][1] + '" class="close adjust-close" onclick="removeTask(this.id)">x</a></div>';
    }
}

// remove task  
function removeTask(taskid) {
    var tid = taskid.slice(6);
    var taskItems = JSON.parse(localStorage.getItem('Tasks'));
    delete taskItems[tid];
    localStorage.setItem('Tasks', JSON.stringify(taskItems));
    taskDetails = taskItems;
    updateTask(taskItems);
}

// Clear the Board Data
function clearBoard() {
    localStorage.removeItem('Tasks');
    var data = JSON.parse(localStorage.getItem('Tasks'));
    updateTask(data);
    taskDetails = {};
}

//Editable title 
const editable = document.querySelector("[contenteditable]");

// save edits
editable.addEventListener("blur", () => {
    localStorage.setItem("dataStorage-" + editable.id, editable.innerHTML);
});

// once on load
for (var key in localStorage) {
    if (key.includes("dataStorage-title")) {
        const id = key.replace("dataStorage-", "");
        document.getElementById(id).innerHTML = localStorage.getItem(key);
    }
}

// modal popup
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close-modal")[0];

function modalpop(modalId) {
    modal.style.display = "block";
    var data = JSON.parse(localStorage.getItem('Tasks'));
    document.getElementById("modal-text").innerText = data[modalId][0];
}

span.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// autoresize input  
taskInput.addEventListener('keydown', autoresize);

function autoresize() {
    var el = this;
    setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}