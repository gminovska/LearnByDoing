
//get all the boxes
let boxes = document.querySelectorAll('.box');

//listen for scroll events and read the scroll position 
// What is the difference between document vs window addEventListener?
document.addEventListener('scroll', boxVisibility)


function boxVisibility() {
    // set a triggerLine at 80% of the screen. Add visible class to all the elements above it
    const triggerLine = window.innerHeight / 5 * 4;
    boxes.forEach((box) => box.getBoundingClientRect().top < triggerLine ? box.classList.add('visible') : box.classList.remove('visible'))
}

//call the function for the initial box rendering, prior to scrolling
boxVisibility();