const menuControl = document.querySelector('.menuControl')
const menuControlB = document.querySelector('.menuControlB')
const subMenu = document.querySelector('.subMenu')
const subMenuB = document.querySelector('.subMenuB')
const menuHamburger = document.querySelector('.menuHamburger')
const menu = document.querySelector('.menu')
const arrow = document.querySelectorAll('.arrow')
const main = document.querySelector('.main')
const changeHamburger = document.querySelector('.changeHamburger')

menuControl.onclick = (e) => {
    showMenu(subMenu, arrow[0])
}

menuControlB.onclick = (e) => {
    showMenu(subMenuB, arrow[1])
}

menuHamburger.onclick = () => {
    showMenu(menu, changeHamburger)
}

function showMenu (menu, arrow) {
    menu.classList.toggle('active')
    arrow.setAttribute('src', 'images/icon-arrow-up.svg')
    const containsActive = menu.classList.contains('active')

    if(!containsActive) {
        arrow.setAttribute('src', 'images/icon-arrow-down.svg')
    }
    if (arrow === changeHamburger && containsActive) {
        arrow.setAttribute('src', 'images/icon-close-menu.svg')
        main.classList.add('expanded')
    } else if (arrow === changeHamburger && !containsActive) {
        arrow.setAttribute('src', 'images/icon-menu.svg')
        main.classList.remove('expanded')
    }
}