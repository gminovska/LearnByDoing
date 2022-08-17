const loader = document.getElementById('loader');
const body = document.getElementsByTagName('body')[0];

let counter = 0;

let loaderInterval = window.setInterval(() => {
    counter++;

    if (counter <= 100) {
        loader.innerHTML = `${counter} %`;
        loader.style.opacity = scale(counter, 0, 100, 1, 0);
        body.style.backdropFilter = `blur(${scale(counter, 0, 100, 50, 0)}px)`
    } else {
        window.clearInterval(loaderInterval)
    }
}, 50);

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}