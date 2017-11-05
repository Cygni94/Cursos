function dayAndTime() {

    let newDate = new Date();

    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let todayIs = "Today is: " + weekDays[newDate.getDay()] + ".";

    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();

    let hourAMPM = 0;

    if (hour > 12) {
        let hourAMPM = hour % 12 + " PM";
    } else {
        if (hour < 12) {
            let hourAMPM = hour + " AM";
        } else {
            let hourAMPM = "12 PM"
        }

    }

    currentTime = "Current time is: " + hourAMPM + ":" + minutes + ":" + seconds;

    result = todayIs + " " + currentTime;

    return result;
}

console.log(dayAndTime());

function currentTime() {

};

let answerField = document.querySelector('#one > #result');
answerField.innerHTML = dayAndTime();

/* w3resource */
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);