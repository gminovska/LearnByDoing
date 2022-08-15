var searchBtn = document.getElementById("search-btn");
var searchInput = document.getElementById("search-input");

searchBtn.addEventListener('click', toggleInputVisibility);

function toggleInputVisibility() {
    searchInput.classList.toggle('visible');
    searchInput.focus()
}