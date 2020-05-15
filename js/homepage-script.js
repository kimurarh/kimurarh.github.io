function myGreeting() {

    var today = new Date();
    var time = today.getHours();
    
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    document.getElementById("calendar").innerHTML = week[today.getDay()] + ", " + month[today.getMonth()] + " " + today.getDate();

    if (time >= 6 && time < 12) {
        document.getElementById("greeting").innerHTML = "Good Morning, Hideki!";
    } else if (time >= 12 && time < 17) {
        document.getElementById("greeting").innerHTML = "Good Afternoon, Hideki!";
    } else {
        document.getElementById("greeting").innerHTML = "Good Evening, Hideki!";
    }

}

function sameHeight() {

    var h = new Array(3);
    h[0] = document.getElementById("social-box").clientHeight;
    h[1] = document.getElementById("university-box").clientHeight;
    h[2] = document.getElementById("programming-box").clientHeight;

    var max = h[0];
    
    /* Find the biggest h[i] */
    for( var i = 1; i < h.length; i ++) {
        if (h[i] > max) {
            max = h[i];
        }
    }

    /* Resizes every class element to biggest h[i] */
    var divs = document.getElementsByClassName("content-box");
    for( var j = 0; j < divs.length; j++) {
        divs[j].style.height = max + "px";
    }

}

myGreeting();

sameHeight();



