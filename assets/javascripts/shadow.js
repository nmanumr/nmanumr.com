var header = document.getElementsByClassName("md-header")[0]
var toc = document.getElementsByClassName("md-sidebar--secondary")[0]

window.addEventListener('scroll', updateLayout);
(function(){updateLayout()})();

function updateLayout(){
    if(window.scrollY > 300){
        header.setAttribute("data-md-state", "shadow");
        toc.setAttribute("data-md-state", 'lock');
    }
    else{
        header.setAttribute("data-md-state", "no-shadow");
        toc.setAttribute("data-md-state", 'no-lock');
    }
}
