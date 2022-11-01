const menuBnt = document.querySelector('.menu-hamburguer');

menuBnt.addEventListener("click", ()=>{
    const menuLista = document.querySelector('.menu-desktop')
    const menu = document.querySelector('.menu')
    const menuLink = document.querySelectorAll('.menu__link')
    
    menuBnt.classList.toggle('menu-hamburguer-active')
    menuLista.classList.toggle('menu-desktop-active')
    menu.classList.toggle('menu-active')
    menuLink.forEach((elemento)=>{
        elemento.classList.toggle('menu__link-active')})
})