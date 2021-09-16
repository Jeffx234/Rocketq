export default function Modal() {
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)

  function open() {
    //funcionalidade de atribuir a classe active para a moda1
    document.querySelector('.modal-wrapper').classList.add('active')
  }
  function close() {
    //Functionalidade de remover a classe active da moda1
    document.querySelector('.modal-wrapper').classList.remove('active')
  }

  return {
    open,
    close
  }
}
