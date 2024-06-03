
var listId = 0;

function addTask() {
    var taskInput = document.getElementById("taskInput").value

    if(taskInput.trim() === ""){
        alert("Please enter the task !!!")
        return
    }

    var ul = document.getElementById("todo-list")

    ul.innerHTML += `<li id="list-${listId}">${taskInput}</li> <button onclick="completeTask('list-${listId}')">Completed</button>`
    listId++;
    taskCount();
}

function completeTask(id){
    var taskList = document.getElementById(id);
    taskList.classList.add("completed");
    console.log(taskList)
    taskList.style.textDecoration ="line-through";
    taskList.style.color ="red";
    taskCount();
    return
}

function taskCount(){
    var totalTask = document.querySelectorAll("#todo-list li").length
    var completedTasks = document.querySelectorAll("#todo-list li.completed").length;
    var pendingTask = totalTask - completedTasks
  
    var total = document.getElementById("total-task")
    total.innerHTML = `${pendingTask} / ${totalTask}`
    // console.log(completedTasks);
    // console.log(totalTask)
}
