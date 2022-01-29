let contador = document.querySelector('#contador')
let botaoPausar = document.querySelector('#botaoPausar')

let count = 0

let intervalo = setInterval(function () {
  count++
  contador.innerText = count
}, 1000)

botaoPausar.onclick = function () {
  clearInterval(intervalo)
}
