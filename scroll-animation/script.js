
let boxes = document.querySelectorAll('.box');
let options = {
    rootMargin: "-200px"
};
let observer = new IntersectionObserver(loadBoxes, options);

function loadBoxes(entries, observer) {
    entries.forEach((entry) => {
        // makes all the boxes in the viewport AND the ones above them visible
        if (entry.isIntersecting || (entry.boundingClientRect.top < entry.rootBounds.top)) {
            entry.target.classList.add('visible')
        }
        // removes bottom boxes as we scroll up
        if (entry.boundingClientRect.top > entry.rootBounds.bottom) {
            entry.target.classList.remove('visible')
        }

    })
}

boxes.forEach(box => observer.observe(box))