//Q # 1
function submits() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var num = document.getElementById('num');
    var pass = document.getElementById('pass');

    document.write("Name: " + name.value + "<br/>E-mail: " + email.value + "<br/>Phone Number: " + num.value + "<br/>Password: " + pass.value);
}

//Q # 2
function readmore() {
    document.getElementById('more').style.display = 'block';
    document.getElementById('btn1').style.display = 'block';
    document.getElementById('btn').style.display = 'none';
}

function readless() {
    document.getElementById('more').style.display = 'none';
    document.getElementById('btn1').style.display = 'none';
    document.getElementById('btn').style.display = 'block';
}

//Q # 3
function delete_row() {
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

function details() {
    var name = document.getElementById('std_name').value;
    var email = document.getElementById('std_email').value;
    var num = document.getElementById('std_num').value;
    var table = document.getElementById('myTable1');
    var row = table.insertRow(2);
    row.innerHTML = ' <td>' + name + '</td>' +
        '<td>' + email + '</td>' + '<td>' + num + '</td> ' +
        "<td><input type='button' value='Delete' onclick='delete_row()'></td>";
}