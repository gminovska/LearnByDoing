var searchBtn = document.getElementById("search-btn");
var searchInput = document.getElementById("search-input");

searchBtn.addEventListener('click', toggleInputVisibility);

function toggleInputVisibility() {
    searchInput.classList.contains('visible') ? searchInput.classList.remove('visible') : searchInput.classList.add('visible');
    searchInput.focus()
}