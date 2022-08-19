// find out how many boxes to show based on the screen width. The rest hide by translating them to left and right alternating

const screenHeight = window.innerHeight;
const boxHeight = 220; // 200px height + 20px bottom margin

//the first box is always visible, regardless of screen height. That is why if numberOfBoxes = 0, we default it to 1.
const numberOfBoxes = Math.floor(screenHeight / boxHeight) || 1;
console.log(numberOfBoxes);

//get all the boxes
let boxes = document.querySelectorAll('.box');


for (let i = numberOfBoxes; i < boxes.length; i++) {
    // even boxes to the left
    if (i % 2 == 0) {
        boxes[i].classList.add('left')
    } else {
        boxes[i].classList.add('right')
    }
}
