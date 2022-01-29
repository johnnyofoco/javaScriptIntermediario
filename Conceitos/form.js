let formulario = document.querySelector('#formCadastro')

//Alterando o comportamento padrão do submit
formulario.onsubmit = function (evento) {
  evento.preventDefault()

  let temErro = false

  let inputNome = document.forms['formCadastro']['nome']
  let inputEmail = document.forms['formCadastro']['email']
  let selectCidade = document.forms['formCadastro']['cidade']

  let spanInputNome = inputNome.nextSibling.nextSibling
  let spanInputEmail = inputEmail.nextSibling.nextSibling
  let spanSelectCidade = selectCidade.nextSibling.nextSibling

  //Validação dos campos do formulário:
  if (!inputNome.value) {
    temErro = true
    inputNome.classList.add('inputError')
    spanInputNome.innerText = 'Digite o nome corretamente'
  } else {
    
    inputNome.classList.remove('inputError')
    spanInputNome.innerText = ''
  }

  if (!inputEmail.value) {
    temErro = true

    inputEmail.classList.add('inputError')
    spanInputEmail.innerText = 'Digite o email corretamente'
  } else {
    
    inputEmail.classList.remove('inputError')
    spanInputEmail.innerText = ''
  }

  if (!selectCidade.value) {
    temErro = true
    selectCidade.classList.add('inputError')
    spanSelectCidade.innerText = 'Selecione a cidade'
  } else {
    
    selectCidade.classList.remove('inputError')
    spanSelectCidade.innerText = ''
  }

  if (!temErro) {
    formulario.submit()
  }
}
