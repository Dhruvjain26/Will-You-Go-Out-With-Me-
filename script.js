function next() {
    window.location.href = "yes.html";
}

function move() {
    var x = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    var y = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    document.getElementById('noButton').style.top = `${x}px`;
    document.getElementById('noButton').style.left = `${y}px`;
}