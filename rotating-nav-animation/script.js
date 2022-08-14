const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const body = document.getElementsByTagName('body')[0];
openBtn.addEventListener('click', () => body.classList.add('show-nav'));
closeBtn.addEventListener('click', () => body.classList.remove('show-nav'));