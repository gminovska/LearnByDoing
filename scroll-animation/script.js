
//get all the boxes
let boxes = document.querySelectorAll('.box');

//call the function for the initial box rendering, prior to scrolling
boxVisibility();

// There is no notable difference in the behavior. 
// The difference is that the event handler won’t get called faster than the frame rate as determined by the requestAnimationFrame method. 
// This means that your event handler code will get called around 60 times a second - Creating Web Animations by Kirupa Chinnathambi

var isScrolling = false;

window.addEventListener("scroll", throttleScroll);

function throttleScroll() {
    if (isScrolling == false) {
        requestAnimationFrame(function () {
            boxVisibility();
            isScrolling = false;
        });
    }
    isScrolling = true;
}
function boxVisibility() {
    // set a triggerLine at 80% of the screen. Add visible class to all the elements above it
    const triggerLine = window.innerHeight / 5 * 4;
    boxes.forEach((box) => box.getBoundingClientRect().top < triggerLine ? box.classList.add('visible') : box.classList.remove('visible'))
}