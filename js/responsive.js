document.getElementById("fa-bars").addEventListener("click", view_main);
document.getElementById("icon-back").addEventListener("click", hidden_main);

var nav_rpv = document.getElementById("nav-rpv");
var nav = document.getElementById("nav");

function view_main (){
    nav_rpv.style.left = "0px";
}

function hidden_main (){
    nav_rpv.style.left = "-1000px";
    nav.style.position = "fixed";
} 


