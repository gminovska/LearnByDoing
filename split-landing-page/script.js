let boxes = document.querySelectorAll('.box');

boxes.forEach((box) => box.addEventListener('mouseover', (e) => {
    boxes.forEach(box => {
        if (e.currentTarget !== box) {
            box.classList.add('shrink')
        } else {
            box.classList.remove('shrink')
        }
    })
}))


document.addEventListener('mouseout', (e) => {
    boxes.forEach(box => {
        box.classList.remove('shrink')
    })
})