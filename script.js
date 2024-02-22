const list = document.querySelector("#navigation").classList;

const navList = document.querySelector("nav .nav-items");

function shownav () {
    if(list.contains("fa-bars")){
        list.replace("fa-bars","fa-times");
        navList.style.right="0%"
    }else{
        hidenav();
    }
}

function hidenav () {
    if(list.contains("fa-times")){
        list.replace("fa-times","fa-bars");
        navList.style.right="-55%";
    }
}