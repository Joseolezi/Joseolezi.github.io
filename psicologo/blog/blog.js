let lightTheme = true;
let menu = document.getElementById("menu");
let toggleThemeBtn = document.getElementById("toggle-theme-btn");
const now = new Date();
let hour = now.getHours();

document.addEventListener("DOMContentLoaded", function() {
    menu = document.getElementById("menu");
    toggleThemeBtn = document.getElementById("toggle-theme-btn");
    lightIcon = document.getElementById('light-icon');
    darkIcon = document.getElementById('dark-icon');
    menuIconL = document.getElementById('menu-icon-l');
    menuIconD = document.getElementById('menu-icon-d');
    arrowD = document.getElementById('close-icon-d');
    arrowL = document.getElementById('close-icon-l');
});

function start() {

    if (hour < 19 && hour > 7) {
        lightTheme = false;
       
    } else {
        lightTheme = true;
      
    }
   toggleTheme ();
} 

function toggleTheme() {

    lightTheme = !lightTheme;
    if (lightTheme == true) {

        lightIcon.style.display="none";
        darkIcon.style.display="block";
        menuIconL.style.display="none"; 
        menuIconD.style.display="block";
        arrowL.style.display="none"; 
        arrowD.style.display="block";
        document.documentElement.style.setProperty('--primary-bg-color', '#fcffdf');
        document.documentElement.style.setProperty('--primary-txt-color', '#2c3e50');
        document.documentElement.style.setProperty('--page-bg-color', '#2c3e50');
        document.documentElement.style.setProperty('--primary-bg-color', '#fcffdf');
        document.documentElement.style.setProperty('--area-hl-txt', '#2c3e50');
        document.documentElement.style.setProperty('--area-bg-color', '#ffffff');
        document.documentElement.style.setProperty('--primary-t-color', '#fcffdf6b');

    }
    else {
        
        lightIcon.style.display="block";
        darkIcon.style.display="none";
        menuIconL.style.display="block";
        menuIconD.style.display="none";
        arrowL.style.display="block";
        arrowD.style.display="none";
        document.documentElement.style.setProperty('--primary-txt-color', '#fcffdf'); 
        document.documentElement.style.setProperty('--primary-bg-color', '#002933');
        document.documentElement.style.setProperty('--area-hl-txt', '#fcffdf');
        document.documentElement.style.setProperty('--area-bg-color', '#fcffdf');
        document.documentElement.style.setProperty('--primary-t-color', '#2c3e505d');
    }

}


function openM() {

    menu.style.display="block";

}

function closeMenu() {

    menu.style.display="none";
}










