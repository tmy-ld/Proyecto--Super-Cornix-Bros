const btn = document.getElementById("menu-hamburguesa");
const menu = document.getElementById("nav-menu");

btn.addEventListener("click", () => {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else{
        menu.style.display = "flex";
    }
});