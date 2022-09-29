// Mobile menu ---------------

const btn = document.querySelector("button.mobile-menu-button ");
const menu = document.querySelector(".mobile-menu ");


//add EventListener
btn.addEventListener('click', () => {
    menu.classList.toggle("hidden")

});

// -------mobile - menu - end----------


//-- Timer Function -------------


// Set the date we're counting down to
var countDownDate = new Date("Dec 15, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days;
    document.getElementById("demo1").innerHTML = hours;
    document.getElementById("demo2").innerHTML = minutes;
    document.getElementById("demo3").innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// ----- Timer Function -end --------------