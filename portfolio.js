const navegacaoMenu = document.querySelector('.container-nav')
const btnMenu = document.querySelector('#btn-menu')
const btnTop = document.querySelector('.btn-top')

btnMenu.addEventListener('click', () =>{
    navegacaoMenu.classList.toggle('ativar2')
    btnMenu.classList.toggle('ativar')
})

btnTop.addEventListener('click', () =>{
    window.scrollTo(0, 0)
})