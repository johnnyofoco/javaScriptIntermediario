//Variáveis, Constantes
const cidades = {
  sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
  rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé']
}

//Objetos HTML
let selectEstado = document.querySelector('#estado')
let boxCidades = document.querySelector('.box.cidades')
let cidade = document.querySelector('#cidade')

//Funções
function listarCidades () {
  boxCidades.classList.remove('hidden')
  cidade.innerHTML = '<option value="">-- Selecione a cidade --</option>'

  let uf = selectEstado.value

  if (uf == 'rj') {
    let count = 0

    while (count < cidades.rj.length) {
      cidade.innerHTML += `<option>${cidades.rj[count]}</option>`
      count++
    }
  } else if (uf == 'sp') {
    let count = 0

    while (count < cidades.sp.length) {
      cidade.innerHTML += `<option>${cidades.sp[count]}</option>`
      count++
    }
  }
}
//Event Listener
selectEstado.addEventListener('change', listarCidades)

//Validação do formulário
let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function (evento) {
  evento.preventDefault()

  let temErro = false

  let selectEstado = document.forms['formCadastro']['estado']
  let spanSelectEstado = selectEstado.nextSibling.nextSibling

  let selectCidade = document.forms['formCadastro']['cidade']
  let spanSelectCidade = selectCidade.nextSibling.nextSibling

  //Validação dos campos do formulário:
  if (!selectEstado.value) {
    temErro = true
    selectEstado.classList.add('inputError')
    spanSelectEstado.innerText = 'Selecione o estado!'
  } else {
    selectEstado.classList.remove('inputError')
    spanSelectEstado.innerText = ''
  }

  if (!selectCidade.value) {
    temErro = true
    selectCidade.classList.add('inputError')
    spanSelectCidade.innerText = 'Selecione a cidade!'
  } else {
    selectCidade.classList.remove('inputError')
    spanSelectCidade.innerText = ''
  }
    
  if (!temErro) {
    formulario.submit()
  }
} //Fim da validação