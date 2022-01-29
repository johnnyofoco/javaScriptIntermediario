
//Elementos HTML
let contador = document.querySelector('.contador')
let btnSubtrair = document.querySelector('#btnSubtrair')
let btnSomar = document.querySelector('#btnSomar')

//Variáveis
let cont = 0

//EventListener´s
btnSomar.addEventListener('click', incrementarContador)
btnSubtrair.addEventListener('click', decrementarContador)

//Funções
function incrementarContador() {
  cont++
  contador.innerHTML = `${cont}`
}

function decrementarContador () {
  cont--
  contador.innerHTML = `${cont}`
}


