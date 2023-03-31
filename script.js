// Start Screen Elements
const startScreen = document.querySelector('.start-screen')
const inputNumber = document.querySelector('#inputNumber')
const tryBtn = document.querySelector('#btn')

// Congrats Screen Elements
const congratsScreen = document.querySelector('.congrats-screen')
const howManyTries = congratsScreen.querySelector('h2')
const playAgain = document.querySelector('#playAgain')

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

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

      return alert('Ainda não foi dessa vez!')
    } else {
      startScreen.classList.add('hide')
      congratsScreen.classList.remove('hide')

      xAttempts === 1
        ? (howManyTries.innerText = `Você acertou de primeira!`)
        : (howManyTries.innerText = `Acertou em ${xAttempts} tentativas!`)
    }

    inputNumber.value = '' // Reseta o campo input
  }
}

function handlePlayAgain() {
  startScreen.classList.remove('hide')
  congratsScreen.classList.add('hide')

  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

tryBtn.addEventListener('click', handleVerifyGuessedNumber)
playAgain.addEventListener('click', handlePlayAgain)
