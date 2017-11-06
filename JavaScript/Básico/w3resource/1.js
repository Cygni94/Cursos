let id = "one";
let exercise = "1. Write a JavaScript program to display the current day and time in the following format. Sample Output : Today is : Friday. Current time is : 4 PM : 50 : 22";




function dayAndTime() {

    let newDate = new Date();

    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let todayIs = "Today is: " + weekDays[newDate.getDay()] + ".";

    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();

    hourAMPM = (hour>=12)?hour - 12 + ' PM':hour + ' AM';

    currentTime = "Current time is: " + hourAMPM + " : " + minutes + " : " + seconds;

    result = todayIs + " " + currentTime;

    return result;
}


function taskData() {
let task = {
    id: id,
    exercise: exercise,
    code: dayAndTime,
    result: dayAndTime()
}
return task;
}
/* criar função para automatizar a criação de <tr>
function createRow(task) {
    let newTr = document.createElement("tr");

    newTr.appendChild(newTd(task.id));
    newTr.appendChild(newTd(task.exercise));
    newTr.appendChild(newTd(task.code));
    newTr.appendChild(newTd(task.result));

    return newTr;
}

function createCell(taskData) {
    let newTd = document.createElement("td");
    newTd.textContent = taskData;

    return newTd;
}

function addRow(task) {
let newTr = createRow(task);
let table = document.querySelector('#table');
table.appendChild(newTr);
}
*/

function createRow(task) {
    let newTr = document.createElement("tr");
    newTr.appendChild(task.id);
    return newTr;
}

function addToTable(newTr) {
    let table = document.querySelector('#table');
    table.appendChild

return table;    
}


let answerField = document.querySelector('#one > #result');
answerField.innerHTML = dayAndTime();
