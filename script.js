function menuMobile(e) {
    const btnMobile = document.querySelector('#btn-mobile')
    
    if(btnMobile) {
        btnMobile.addEventListener('click', () => {
            const menu = document.querySelector('#menu')
            menu.classList.toggle('ativo')
        })
        outside()
    }
}

menuMobile()


//outside event

function outside(callback) {
    const html = document.documentElement;
    console.log(callback)

    function handleOutsideClick(event) {
        if(event.target === html) {
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

