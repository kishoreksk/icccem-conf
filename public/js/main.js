// ------------slider ------------

let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByClassName('card');


let elementsToShow = 3;
if (document.body.clientWidth <= 1000) {
    elementsToShow = 2;
} else if (document.body.clientWidth <= 1500) {
    elementsToShow = 3;

}



let sliderContainerWidth = sliderContainer.clientWidth;


let cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + 'px';
slider.style.transition = 'margin';
slider.style.transitionDuration = '1s';


for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth + 'px';

}

function prev(params) {
    console.log(+slider.style.marginLeft.slice(0, -2))
    console.log(-cardWidth * (cards.length - elementsToShow))
    if (parseInt(+slider.style.marginLeft.slice(0, -2)) != parseInt(-cardWidth * (cards.length - elementsToShow)))
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) - cardWidth) + 'px';

}

function next(params) {
    if (+slider.style.marginLeft.slice(0, -2) != 0)
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) + cardWidth) + 'px';

}

// function autoPlay(params) {
//     prev()
//     if (parseInt(+slider.style.marginLeft.slice(0, -2)) === parseInt(-cardWidth * (cards.length - elementsToShow))) {
//         slider.style.marginLeft = '0px'
//     }

//     setTimeout(() => {
//         autoPlay();
//     }, 5000);

// }

// setTimeout(() => {
//     autoPlay();
// }, 2000);

// -------------slider end ----------------

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