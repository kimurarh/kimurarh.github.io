/*
Typing effect - adds each char of 'txt'

var i = 0;
var txt = 'Rafael Hideki Kimura';
var speed = 150;
var cursorSpeed = 4 * speed;
var cursor = true;

function typeWriter() {

    if (i < txt.length) {
        document.getElementById("name-title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }

}

typeWriter();


Cursor blinking effect - it will execute the function repetitively after 'cursorSpeed' miliseconds
setInterval(() => {
    if(cursor) {
        document.getElementById("cursor").style.opacity = 0;
        cursor = false;
    } else {
        document.getElementById("cursor").style.opacity = 1;
        cursor = true;
    }
}, cursorSpeed);

*/

/* Fade out content as user scrolls down and make scroll top button appear*/
$(function() {
    var documentEl = $(document);
    var fadeElem = $(".fade-scroll");

    documentEl.on("scroll", function() {
        var scrollPos = documentEl.scrollTop();
        
        fadeElem.each(function() {
            var elemOffsetTop = $(this).offset().top;
            if(scrollPos > elemOffsetTop) {
                $(this).css("opacity", 1 - (scrollPos - elemOffsetTop)/600);
            }
        })

        var opacityIncrement = 0;
        if (scrollPos < 100) {
            $("#top-scroll").css("opacity", 0);           
        } else {
            $("#top-scroll").css("opacity", 1);           
        }

    })

    $("#top-scroll").click(function(){
        $("#main-screen").css("opacity", 1);
    });

})

