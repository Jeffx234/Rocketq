import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescripttion = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pgear todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //Adicionar o evento click
  button.addEventListener('click', handleClick)
})

/* Quando o botao dele for clickado ele abre a modal */
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault()
  const text = check ? 'Marcar como lida' : 'Excluir'
  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/room/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescripttion.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()} `
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  //Abrir modal
  modal.open()
}
