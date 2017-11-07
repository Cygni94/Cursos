function montaTr(two) {
    var newTr = document.createElement("tr");

    newTr.appendChild(newTd(two.id));
    newTr.appendChild(newTd(two.task));
    newTr.appendChild(newTd(two.code));
    newTr.appendChild(newTd(two.result));

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