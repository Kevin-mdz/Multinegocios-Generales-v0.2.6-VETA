document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

var bar_search =       document.getElementById("ctn-bar-search");
var cover_ctn_search =  document.getElementById("cover-ctn-search");
var inputSearch =       document.getElementById("inputSearch");
var box_serch =         document.getElementById("box-search");


function mostrar_buscador (){

    bar_search.style.display = "block";
    bar_search.style.top= "0px";
    cover_ctn_search.style.display ="block";
    inputSearch.focus();
    bar_search.style.background ="#fff";


    if (inputSearch.value === ""){
        box_serch.style.display = "none"; 
    }

}

function ocultar_buscador (){

    bar_search.style.display= "";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_serch.style.display = "none";
    bar_search.style.background ="#326FC4";
}


//      Search Filter

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){
    
    filter = inputSearch.value.toUpperCase();
    li = box_serch.getElementsByTagName("li");

    //Elements Filter Search

    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            box_serch.style.display = "block";

            if (inputSearch.value === ""){
                box_serch.style.display = "none";
            }
        }else{
            li[i].style.display = "none";
        }
    }


}





