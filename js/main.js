function toggleDropdownMenu() {
    var menu = document.getElementById('menuDiv');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function toggleProject(content) {
    document.getElementById(content).style.visibility="visible";
    alert(content);
}