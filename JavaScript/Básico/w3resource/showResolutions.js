function montaTr(two) {
    var newTr = document.createElement("tr");
newTr.classList.add("row");

    newTr.appendChild(newTd(two.id)).classList.add("col-1");
    newTr.appendChild(newTd(two.task)).classList.add("col-3");
    newTr.appendChild(newTd(two.code)).classList.add("col-6");
    newTr.appendChild(newTd(two.result)).classList.add("col-2");
    return newTr;
}

function newTd(dado) {
    var newTd = document.createElement("td");
    newTd.textContent = dado;

    return newTd;
}

function appendRow(task) {
    let newTr = montaTr(task);
    let table = document.querySelector('#table');
    table.appendChild(newTr);
}