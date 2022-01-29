//Elementos HTML
let contador = document.querySelector('.contador')
let btnSubtrair = document.querySelector('#btnSubtrair')
let btnSomar = document.querySelector('#btnSomar')

//Variáveis
let count = 0
let tipoCount = ''
let intervalo

//EventListener´s
btnSubtrair.addEventListener('click', decrementarContador)
btnSomar.addEventListener('click', incrementarContador)

//Funções
function definirIntervalo (tipo) {
  if (tipo === 'decrementar') {
    intervalo = setInterval(function () {
      count--
      contador.innerText = count
    }, 100)
  } else if (tipo === 'incrementar') {
    intervalo = setInterval(function () {
      count++
      contador.innerText = count
    }, 100)
  } else {
    clearInterval(intervalo)
  }
}

function decrementarContador () {
  clearInterval(intervalo)
  btnSomar.classList.remove('somarSelecionado')
  btnSubtrair.classList.add('subtrairSelecionado')
  tipoCount = 'decrementar'
  definirIntervalo(tipoCount)
}

function incrementarContador () {
  clearInterval(intervalo)
  btnSubtrair.classList.remove('subtrairSelecionado')
  btnSomar.classList.add('somarSelecionado')
  tipoCount = 'incrementar'
  definirIntervalo(tipoCount)
}
