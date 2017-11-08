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

//exercise 3
let three = {
    id: "3",
    task: "Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy ",
    code: currentDate.toString(),
    result: currentDate()
}

function currentDate() {
    let rightNow = new Date;
let dd = rightNow.getDate();
if (dd.toString().length == 1) {
    dd = "0"+dd;
}
let mm = rightNow.getMonth() + 1;
if (dd.toString().length == 1) {
    dd = "0"+dd;
}
let yyyy = rightNow.getFullYear();

let today = dd + "/" + mm + "/" + yyyy;

    return today;
}

//exercise 4
let four = {
    id: "4",
    task: "Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.",
    code: escalenoArea.toString(),
    result: escalenoArea()
}

function escalenoArea() {
    let a = 5;
    let b = 6;
    let c = 7;
    let area = (1/2) * a * b * Math.sin(c);

    return area;
}
console.log(escalenoArea());