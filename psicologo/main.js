

let popupOverlay;
let lightIcon;
let darkIcon;
let mainImgL;
let mainImgD;
let menuIconL;
let menuIconD;
let arrowD;
let arrowL;
let lightTheme = true;
let menu = document.getElementById("menu");
let formpop = document.getElementById("formpop");
let popen = document.getElementById("popen");
let popclose = document.getElementById("popclose");
let toggleThemeBtn = document.getElementById("toggle-theme-btn");
const now = new Date();
let hour = now.getHours();
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
    mainT1= document.getElementById('main-xt-1');
    mainT2= document.getElementById('main-xt-2');
    mainT3= document.getElementById('main-xt-3');
    mainT4= document.getElementById('main-xt-4');

    start();
    
});

function start() {

    if (hour < 19 && hour > 7) {
        lightTheme = false;
       
    } else {
        lightTheme = true;
      
    }
   toggleTheme ();
} 


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
        document.documentElement.style.setProperty('--area-hl-txt', '#fcffdf');
        document.documentElement.style.setProperty('--area-bg-color', '#fcffdf');
        document.documentElement.style.setProperty('--primary-t-color', '#0b5a6e5d');
        
    }

}

(function() {
    const buttons = document.querySelectorAll(".btn-posnawr");
  
    buttons.forEach(button => {
      ["mouseenter", "mouseout"].forEach(evt => {
        button.addEventListener(evt, e => {
          let parentOffset = button.getBoundingClientRect(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
  
          const span = button.getElementsByTagName("span");
  
          span[0].style.top = relY + "px";
          span[0].style.left = relX + "px";
        });
      });
    });
  })();