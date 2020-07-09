
var menu = document.getElementById("nav-menu");
var navItems = document.getElementsByClassName("nav-item");

var widthLimit = 600;
var clientWidth = document.body.clientWidth;

/* toggle "collapse" class */
function toggleClass() {
    for (var j = 0; j < navItems.length; j++) {
        navItems[j].classList.toggle('collapse');
    }
}

/* Listens for click on "nav-items" */
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", () => {
        /* Only collapse if on mobile */
        if(clientWidth <= widthLimit) {
            toggleClass();
        }
    })
}

/* Listens for clicks on "menu" button */
menu.addEventListener("click", () => {
    toggleClass();
});