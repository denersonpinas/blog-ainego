const btnMenu = document.getElementById('btn-menu')

function toggleMenu() {
    const nav = document.getElementById('navbar')
    nav.classList.toggle('active')
}

function toggleSubMenu() {
    const subMenu = document.getElementById('sub-menu')
    subMenu.classList.toggle('active')
}

// btnMenu.addEventListener('click', toggleMenu)