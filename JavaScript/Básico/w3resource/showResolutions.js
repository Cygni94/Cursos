function newTd(dado) {
    var newTd = document.createElement("td");
    newTd.textContent = dado;

    return newTd;
}

function newTr(task) {
    var newTr = document.createElement("tr");
    newTr.classList.add("row");

    newTr.appendChild(newTd(task.id)).classList.add("col-1");
    newTr.appendChild(newTd(task.task)).classList.add("col-3");
    newTr.appendChild(newTd(task.code)).classList.add("col-6");
    newTr.appendChild(newTd(task.result)).classList.add("col-2");
    return newTr;
}

function appendRow(task) {
    let newRow = newTr(task);
    let table = document.querySelector('#table');
    table.appendChild(newRow);
}