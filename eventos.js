let botaoTeste = document.querySelector('#botaoTeste')

let contador = 0

function cliqueBotao () {
  contador++

  console.log(`Mensagem ${contador}`)
  if (contador >= 5) {
    console.log(`Fim!`)
    botaoTeste.removeEventListener('click', cliqueBotao)
  }
}

//addEventListener
botaoTeste.addEventListener('click', cliqueBotao)

/*botaoTeste.addEventListener('click', function () {
  console.log('Mensagem 2')
})
*/

// onclick
/*botaoTeste.onclick = cliqueBotao*/
