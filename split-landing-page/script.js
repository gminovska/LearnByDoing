let boxes = document.querySelectorAll('.box');

boxes.forEach((box) => box.addEventListener('mouseenter', (e) => {
    boxes.forEach(box => {
        if (e.currentTarget === box) {
            box.classList.add('grow')
        } else {
            box.classList.remove('grow')
        }
    })
}))


document.addEventListener('mouseleave', (e) => {
    boxes.forEach(box => {
        box.classList.remove('grow')
    })
})