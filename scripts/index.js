
var menu = document.getElementById("nav-menu");
var navItems = document.getElementsByClassName("nav-item");

var widthLimit = 600;
var clientWidth = document.body.clientWidth;

/* Collapse menu after clicking an option */
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", () => {
        /* Only collapse if on mobile */
        if(clientWidth <= widthLimit) {
            for (var j = 0; j < navItems.length; j++) {
                navItems[j].style.display = "none";
            }
        }
    })
}

/* Collapse menu */
menu.addEventListener("click", () => {
    for (var i = 0; i < navItems.length; i++) {
        if (navItems[i].style.display === "none") {
            navItems[i].style.display = "block";
        } else {
            navItems[i].style.display = "none";
        }
    }
});