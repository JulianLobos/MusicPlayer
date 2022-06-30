let burger = document.getElementById("hamburgerBtn");
let nav = document.getElementById("nav");
let navStatus = false;
let main = document.getElementById("main");
let header = document.getElementById("header");

function showNav() {
    nav.style.left='0';
    navStatus = true;
    main.style.filter= "brightness(0.4)";
    main.style.zIndex= "-1"
    header.style.zIndex= "3"
    nav.style.zIndex= "3"

}

function hideNav(){
    nav.style.left="-100%";
    navStatus = false;
    main.style.filter= "none";
}

burger.onclick = () => {
    navStatus ? hideNav() : showNav();
}

