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
 console.log(taskData());

/*
function createRow() {
    let newTr = document.createElement("tr");

    newTr.appendChild(newTd(id))
}
*/

let answerField = document.querySelector('#one > #result');
answerField.innerHTML = dayAndTime();
