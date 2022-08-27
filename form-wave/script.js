let labels = document.querySelectorAll('.form label');

// Wrap each label letter in span
labels.forEach((label) => {
    let spanWrappedText = '';
    for (let i = 0; i < label.innerText.length; i++) {
        spanWrappedText += `<span style="transition-delay: ${i * 50}ms">${label.innerText[i] == ' ' ? '&nbsp;' : label.innerText[i]}</span>`
    }
    label.innerHTML = spanWrappedText;
})