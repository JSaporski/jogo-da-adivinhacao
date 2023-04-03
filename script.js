// Start Screen Elements
const startScreen = document.querySelector('.start-screen')
const inputNumber = startScreen.querySelector('#inputNumber')
const tryBtn = startScreen.querySelector('#btn')

// Congrats Screen Elements
const congratsScreen = document.querySelector('.congrats-screen')
const howManyTries = congratsScreen.querySelector('h2')
const playAgain = document.querySelector('#playAgain')

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Funções
function handlePlayAgain() {
  toggleScreen()

  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

function toggleScreen() {
  startScreen.classList.toggle('hide')
  congratsScreen.classList.toggle('hide')
}

function handleResetOnEnter(event) {
  if (event.key === 'Enter' && startScreen.classList.contains('hide')) {
    handlePlayAgain()
  }
}

function handleVerifyGuessedNumber(event) {
  event.preventDefault() // previne o comportamento padrão do botão.

  if (inputNumber.value === '') {
    return alert('Por favor, insira um número!')
  } else if (inputNumber.value < 0 || inputNumber.value > 10) {
    return alert('Por favor, insira um número entre 0 e 10!')
  } else {
    const number = Number(inputNumber.value)

    if (number !== randomNumber) {
      // Sempre irá rodar caso o número não seja o certo.
      xAttempts++
      inputNumber.value = '' // Reseta o campo input

      return alert('Ainda não foi dessa vez!')
    } else {
      toggleScreen()

      xAttempts === 1
        ? (howManyTries.innerText = `Você acertou de primeira!`)
        : (howManyTries.innerText = `Acertou em ${xAttempts} tentativas!`)
    }

    inputNumber.value = '' // Reseta o campo input
  }
}

// Eventos
tryBtn.addEventListener('click', handleVerifyGuessedNumber)
playAgain.addEventListener('click', handlePlayAgain)
window.addEventListener('keydown', handleResetOnEnter)
