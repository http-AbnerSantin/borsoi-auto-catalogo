function menuMobile(e) {
    const btnMobile = document.querySelector('#btn-mobile')
    
    if(btnMobile) {
        const eventos = ['touchstart', 'click']
        eventos.forEach(item => {
            btnMobile.addEventListener(item, (e) => {
                e.preventDefault()
                const menu = document.querySelector('#menu')
                menu.classList.toggle('ativo')
            })
        })
        outside()
    }
}
menuMobile()

//outside event

function outside(callback) {
    const html = document.documentElement;
    const header = document.querySelector('header')
    
    function handleOutsideClick(event) {
        event.preventDefault();
        if(event.target === html || event.target === header) {
            menu.classList.remove('ativo')
        }
    }
    html.addEventListener('click', handleOutsideClick)
}

//RELOAD DA PÁGINA

const logo = document.querySelector('#logoMenu')

logo.addEventListener('click', () => {
    location.reload()
})

