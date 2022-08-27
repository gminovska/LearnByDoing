let form = document.querySelectorAll('.form')[0];
let labels = [];
form.childNodes.forEach((node) => node.htmlFor && labels.push(node));

// Wrap each label letter in span
labels.forEach((label) => {
    let spanWrappedText = '';
    for (let letter of label.innerHTML) {
        spanWrappedText += `<span>${letter}</span>`
    }
    label.innerHTML = spanWrappedText;
})


form.addEventListener('focusin', animateLabelUp);
form.addEventListener('focusout', animateLabelDown);

function animateLabelUp(e) {
    let transitionDelay = 100;
    e.target.labels[0].childNodes.forEach((spanLetter) => {

        spanLetter.style.transitionDelay = `${transitionDelay}ms`;
        transitionDelay += 100;
        spanLetter.classList.add('focused');

    })
}

function animateLabelDown(e) {
    //only if there is no value in the input field
    if (!e.target.value.trim()) {
        e.target.labels[0].childNodes.forEach((spanLetter) => spanLetter.classList.remove('focused'))
    }
}