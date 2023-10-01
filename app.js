const burgerMenu = document.getElementById("burgerMenu")
const header = document.getElementById("header")
const mainMenu = document.getElementById("mainMenu")
const quitMenu = document.getElementById("quitMenu")
let navBarDisplayed = false

window.addEventListener("scroll", ()=> {
    let scrollPos = window.scrollY
    if(scrollPos > 100) {
        header.style.background = "rgba(128, 80, 250, 0.9)"
    } else {
        header.style.background = "transparent"
    }
})

burgerMenu.addEventListener("click", ()=> {
    navBarDisplayed = !navBarDisplayed
    if(navBarDisplayed) {
        mainMenu.style.left = "0"
        burgerMenu.classList.remove("fa-solid", "fa-bars")
        burgerMenu.classList.add("fa-solid", "fa-x")
    } else {
        mainMenu.style.left = "-100%"
        burgerMenu.classList.remove("fa-solid", "fa-x")
        burgerMenu.classList.add("fa-solid", "fa-bars")
    }
})