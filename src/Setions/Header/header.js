const header = document.querySelector('.header')
const menuToggle = document.querySelector('#menu-toggle')
const menu = document.querySelector('.menu')
header.addEventListener('click', (e) => {
    if (e.target.id == 'menu-toggle' && menuToggle.checked) {
        return menu.style.display = 'block'
    }if (e.target.id == 'menu-toggle' && !menuToggle.checked) {
        return  menu.style.display = 'none'
    }
    menu.style.display = 'none'
    
})