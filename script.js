const btnMobile = document.querySelector('#btn-mobile')

btnMobile.addEventListener('click', () => {
    const menu = document.querySelector('#menu')
    menu.classList.toggle('ativo')
})
