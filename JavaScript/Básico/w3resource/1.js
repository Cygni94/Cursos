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

let answerField = document.querySelector('#one > #result');
answerField.innerHTML = dayAndTime();
