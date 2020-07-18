//Q # 1
function alertLink() {
    alert('You clicked me');
}

//Q # 2
function alerts() {
    alert('Thankyou for purchasing a phone from us');
}

//Q # 3
function delete_row() {
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

//Q # 4
function mouseaway(my_image) {
    my_image.src = "images/images 1.jpg";
}

function rollover(my_image) {
    my_image.src = 'images/images 2.jpg';
}

//Q # 5
var clicks = 0;

function add() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function rem() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
}