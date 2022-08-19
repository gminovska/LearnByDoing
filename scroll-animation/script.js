// find out how many boxes to show based on the screen width. The rest hide by translating them to left and right alternating

const screenHeight = window.innerHeight;
const boxHeight = 220; // 200px height + 20px bottom margin

//the first box is always visible, regardless of screen height. That is why if numberOfBoxes = 0, we default it to 1.
let numberOfBoxes = Math.floor(screenHeight / boxHeight) || 1;
console.log(numberOfBoxes);

//get all the boxes
let boxes = document.querySelectorAll('.box');

// initially render all the boxes that fit into the screen height
for (let i = 0; i < numberOfBoxes; i++) {
    boxes[i].classList.add('visible');
}

//listen for scroll events and read the scroll position 
document.addEventListener('scroll', (e) => {


    const newNumberOfBoxes = Math.floor((screenHeight + window.scrollY) / boxHeight) - 1;
    boxes.forEach((box, index) => index < newNumberOfBoxes ? box.classList.add('visible') : box.classList.remove('visible'))
    // if (newNumberOfBoxes < boxes.length) {
    //     if (newNumberOfBoxes > numberOfBoxes) {
    //         // add visible class to the next box
    //         boxes[newNumberOfBoxes - 1].classList.add('visible');
    //         numberOfBoxes = newNumberOfBoxes;
    //     }
    //     if (newNumberOfBoxes < numberOfBoxes) {
    //         //remove visible class from the last box
    //         boxes[newNumberOfBoxes].classList.remove('visible');
    //     }
    // }

    console.log("boxes visible ", window.scrollY)

})