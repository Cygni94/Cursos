// exercise 1
let one = {
    id: "1",
    task: "Write a JavaScript program to display the current day and time in the following format. Sample Output : Today is : Friday. Current time is : 4 PM : 50 : 22",
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
    result: currentDate()
}

function currentDate() {
    let rightNow = new Date;
    let dd = rightNow.getDate();
    if (dd.toString().length == 1) {
        dd = "0" + dd;
    }
    let mm = rightNow.getMonth() + 1;
    if (dd.toString().length == 1) {
        dd = "0" + dd;
    }
    let yyyy = rightNow.getFullYear();

    let today = dd + "/" + mm + "/" + yyyy;

    return today;
}

//exercise 4
let four = {
    id: "4",
    task: "Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.",
    result: escalenoArea()
}

function escalenoArea() {
    let a = 5;
    let b = 6;
    let c = 7;
    let semiperimetro = (a + b + c) / 2;
    let area = Math.sqrt(semiperimetro * (semiperimetro - a) * (semiperimetro - b) * (semiperimetro - c));

    return area;
}

//exercise 5
let five = {
    id: "5",
    task: "Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.",
    result: "w3resource (desafio incompleto)"
}

function animateString(String) {
    let array = String.split('');
    let reversed = array.reverse();
    for (let i = 0; i < reversed.length; i++) {
        setInterval(function () {

        }, 1000);
    }
    return reversed;
}

//exercise 6
let six = {
    id: "6",
    task: "Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.",
    result: bisextoChecker(2016)
}

function bisextoChecker(ano) {
    let check;
    if (0 == ano % 4 && 0 != ano % 100 && 0 == ano % 400) {
        check = 'leap year';
    } else {
        check = 'regular year';
    }
    return ano + ' ' + 'is a' + ' ' + check;
}

//exercise 7
let seven = {
    id: "7",
    task: "Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.",
    result: firstJanSun(2013, 0, 0)
}

function firstJanSun(sinceYear, month, day) {
    let since = new Date(sinceYear, month, day);
    let first = Date.prototype.getDay();    
    return
}
console.log(firstJanSun());