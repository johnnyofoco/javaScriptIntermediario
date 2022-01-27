let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')

let aberto = false

function abrirOuFecharMenu() {

  if (aberto === true) { 
    menuMobile.classList.remove('aberto')
    menuMobile.classList.add('fechado')

    aberto = false

    botaoMenu.innerHTML = 'Abrir menu'
  } else {
    menuMobile.classList.add('aberto')

    aberto = true
    botaoMenu.innerHTML = 'Fechar menu'
  }
  
}