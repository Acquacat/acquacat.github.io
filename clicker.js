var click = 0; 
var c = document.getElementById("click");

function hi() {
    click++;
    alert("click = " + click);
    c.innerText = click;
}
function reset() {
    click = 0;
    c.innerHTML = click;
}