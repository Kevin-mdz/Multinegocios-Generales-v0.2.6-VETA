var main_nav = document.querySelector("#main-nav");
var min_nav  = document.getElementById("nav-min");
var sticky = main_nav.offsetTop;

window.addEventListener('scroll', function(){
    if(window.pageYOffset > sticky){
        main_nav.style.display = "none";
        min_nav.style.top = "0px";
    }else {
        main_nav.style.display = "";
        min_nav.style.top = "";
    }
})