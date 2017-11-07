function createCell(taskData) {
    let newTd = document.createElement("td");
    newTd.textContent = taskData;

    return newTd;
}

function createRow(task) {
    let newTr = document.createElement("tr");
    
    newTr.appendChild(newTd(task.id));
    newTr.appendChild(newTd(task.exercise));
    newTr.appendChild(newTd(task.code));
    newTr.appendChild(newTd(task.result));

    return newTr;
}

function addRow(task) {
let newTr = createRow(task);
let table = document.querySelector('#table');
table.appendChild(newTr);
}
/*
var node = document.createElement("LI");
var textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node); */



// exercise 2
let two = {
    id: "2",
    task: "Write a JavaScript program to print the contents of the current window.",
    code: printWindow,
    result: window
}

function printWindow() {
    let window = window.print();
    return window;
}

onload(createRow(two));