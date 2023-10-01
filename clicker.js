var click=0; 
var c = document.getElementById("click");
function hi(){
    click+=1;
    c.innerHTML = click;
}
function reset(){
    click=0;
    c.innerHTML = click;
}