const buttonMenu = document.querySelector("#mobile-menu")

buttonMenu.addEventListener("click", e => {
    const menu = document.querySelector(".mobile-link")
    menu.classList.toggle("hidden")
})