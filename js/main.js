var menuButton = document.getElementById('menuBtn');
menuButton.onclick = toggleDropdownMenu;

function toggleDropdownMenu() {
    var menu = document.getElementById('menuDiv');
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}