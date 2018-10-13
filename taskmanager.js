


//document.getElementById("AddEvent").addEventListener("click", addEvent);
//document.getElementById("DeleteEvent").addEventListener("click", deleteEvent);
document.getElementById("AddTask").addEventListener("click", addTask);
document.getElementById("DeleteTask").addEventListener("click", deleteTask);

Tasks = []
Events = []
Times = []

function addEvent(){
        //takes days and times of event and adds to calendar
        //also blocks time out of open time

}

function deleteEvent(){
    //takes days and times of event to delete and deletes from calendar
    //adds time to open time

}

function addTask(){
    task = document.getElementById("task").value;
    time = document.getElementById("time").value;
    due = document.getElementById("due").value;
    
    Tasks.push(task);
    Tasks[task] = [time, due]
    console.log(Tasks);

    document.getElementById("task").value = "";
    document.getElementById("time").value = "";
    document.getElementById("due").value = "";
    //takes name and length of task to complete
    //finds place to add to calendar
    //removes time from open time

}

function deleteTask(){
    task = document.getElementById("dtask").value
    Tasks.splice(Tasks.indexOf(task),1);
    console.log(Tasks);
}

