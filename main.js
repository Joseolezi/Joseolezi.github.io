

let lightTheme = true;
let menu = document.getElementById("menu");
let formpop = document.getElementById("formpop");
let popen = document.getElementById("popen");
let popclose = document.getElementById("popclose");
let toggleThemeBtn = document.getElementById("toggle-theme-btn");

document.addEventListener("DOMContentLoaded", function() {
    popupOverlay = document.getElementById("popupOverlay");
    formpop = document.getElementById("formpop");
    menu = document.getElementById("menu");
    toggleThemeBtn = document.getElementById("toggle-theme-btn");
    lightIcon = document.getElementById('light-icon');
    darkIcon = document.getElementById('dark-icon');
    mainImgL = document.getElementById('main-imgl');
    mainImgD = document.getElementById('main-imgd');
    menuIconL = document.getElementById('menu-icon-l');
    menuIconD = document.getElementById('menu-icon-d');
    arrowD = document.getElementById('close-icon-d');
    arrowL = document.getElementById('close-icon-l');
});


// open cv popup 


function openpop() {
    
    popupOverlay.style.display="block";
}

// close cv popup
function closepop() {
    
    popupOverlay.style.display="none";
}

  
function openform () {

    formpop.style.display="flex";
}

function closeform () {

    formpop.style.display="none";

}

function openM() {

    menu.style.display="block";

}

function closeMenu() {

    menu.style.display="none";
}

function toggleTheme() {

    lightTheme = !lightTheme;
    if (lightTheme == true) {

        lightIcon.style.display="none";
        darkIcon.style.display="block";
        mainImgL.style.display="block";
        mainImgD.style.display="none";
        menuIconL.style.display="none";
        menuIconD.style.display="block";
        arrowL.style.display="none";
        arrowD.style.display="block";
        document.documentElement.style.setProperty('--primary-bg-color', '#fcffdf');
        document.documentElement.style.setProperty('--primary-txt-color', '#0b5a6e');
        document.documentElement.style.setProperty('--primary-bg-color', '#fcffdf');
        document.documentElement.style.setProperty('--highlight-color', '#ffcaf6');
        document.documentElement.style.setProperty('--area-hl-txt', '#0b5a6e');
        document.documentElement.style.setProperty('--area-bg-color', '#ffffff');
        document.documentElement.style.setProperty('--primary-t-color', '#fcffdf6b');

    }
    else {
        
        lightIcon.style.display="block";
        darkIcon.style.display="none";
        mainImgL.style.display="none";
        mainImgD.style.display="block";
        menuIconL.style.display="block";
        menuIconD.style.display="none";
        arrowL.style.display="block";
        arrowD.style.display="none";
        document.documentElement.style.setProperty('--primary-txt-color', '#fcffdf'); 
        document.documentElement.style.setProperty('--primary-bg-color', '#002933');
        document.documentElement.style.setProperty('--highlight-color', '#b466a7');
        document.documentElement.style.setProperty('--area-hl-txt', '#fcffdf');
        document.documentElement.style.setProperty('--area-bg-color', '#fcffdf');
        document.documentElement.style.setProperty('--primary-t-color', '#0b5a6e5d');
    }

}