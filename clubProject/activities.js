function tInsert(event) {
    var tbody = document.getElementById('tbody');

    for (var i = 0; i < event.length; i++) {
        var newRow = tbody.insertRow(i);
        var ce1 = newRow.insertCell(0);
        ce1.innerHTML = event[i].name;
        var ce2 = newRow.insertCell(1); 
        ce2.innerHTML = event[i].dates; 
        var ce3 = newRow.insertCell(2);
        ce3.innerHTML = event[i].time;
        var ce4 = newRow.insertCell(3);
        ce4.innerHTML = event[i].location;
    }
}
