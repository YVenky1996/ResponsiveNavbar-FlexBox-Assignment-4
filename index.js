let toggleButton = document.getElementById("toggleButton");
let navList = document.getElementById("navList");
toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
})