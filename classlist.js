let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')

function abrirOuFecharMenu() {
 
  if (botaoMenu.innerHTML === 'Fechar menu') {
    menuMobile.classList.remove('aberto')
    menuMobile.classList.add('fechado')
    botaoMenu.innerHTML = 'Abrir menu'
  } else {
    menuMobile.classList.remove('fechado')
    menuMobile.classList.add('aberto')
    botaoMenu.innerHTML = 'Fechar menu'
  }
  
}