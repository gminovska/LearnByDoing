let form = document.querySelectorAll('.form')[0];
let labels = [];
form.childNodes.forEach((node) => node.htmlFor && labels.push(node));
console.log(labels)
form.addEventListener('focusin', animateLabelUp);
form.addEventListener('focusout', animateLabelDown);

function animateLabelUp(e) {
    // labels
    e.target.labels[0].classList.add('focused')
}

function animateLabelDown(e) {
    //only if there is no value in the input field
    if (!e.target.value.trim()) {
        e.target.labels[0].classList.remove('focused');
    }
}