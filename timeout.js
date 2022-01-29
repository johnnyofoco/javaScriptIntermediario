let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')

function adicionarToast() {
  toast.classList.add('visible')
  setTimeout(removerToast, 3000)
}

function removerToast() {
  toast.classList.remove('visible')
}

botaoCadastrar.onclick = adicionarToast
