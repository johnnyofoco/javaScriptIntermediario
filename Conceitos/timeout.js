let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')
let tarefa = document.querySelector('#tarefa')

function adicionarToast() {
  let tarefaDigitada = tarefa.value
  toast.innerHTML = `Tarefa ${tarefaDigitada} cadastrada com sucesso!`

  toast.classList.add('visible')
  setTimeout(removerToast, 3000)
}

function removerToast() {
  toast.classList.remove('visible')
}

botaoCadastrar.onclick = adicionarToast
