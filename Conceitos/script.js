/*javaScript Intermediário*/

//Seletores

//SELETOR POR ID
document.querySelector('#titulo').innerHTML = 'Exemplo'

// SELETOR POR TAG
document.querySelector('a').innerHTML = 'Teste ancôra'

//SELECIONANDO MAIS DE 1 ITEM POR TAG
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function (elemento) { //função anonima / callback
  elemento.innerHTML = 'Teste'
})

//SELECIONANDO MAIS DE 1 ITEM POR CLASSE
let boxes = document.querySelectorAll('.box')

boxes.forEach(function (box, index) {
   box.innerHTML = 'Box ' + (index + 1)
})