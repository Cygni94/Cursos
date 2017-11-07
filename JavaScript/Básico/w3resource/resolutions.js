// exercise 1
let one = {
    id: "1",
    task: "Write a JavaScript program to display the current day and time in the following format. Sample Output : Today is : Friday. Current time is : 4 PM : 50 : 22",
    code: dayAndTime.toString(),
    result: dayAndTime()
}

function dayAndTime() {
    let newDate = new Date();

    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let todayIs = "Today is: " + weekDays[newDate.getDay()] + ".";

    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();

    hourAMPM = (hour >= 12) ? hour - 12 + ' PM' : hour + ' AM';
    currentTime = "Current time is: " + hourAMPM + " : " + minutes + " : " + seconds;
    result = todayIs + " " + currentTime;
    return result;
}


// exercise 2
let two = {
    id: "2",
    task: "Write a JavaScript program to print the contents of the current window.",
    code: printWindow.toString(),
    result: window
}

function printWindow() {
    let window = window.print();
    return window;
}