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