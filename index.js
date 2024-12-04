import { HangmanOrchestrator } from './src/components/HangmanOrchestrator.js'

const orchestrator = new HangmanOrchestrator()

const welcomeScreen = document.getElementById('welcome-screen')
const onePlayerContainer = document.getElementById('one-player-container')
const twoPlayerContainer = document.getElementById('two-player-container')

const onePlayerBtn = document.getElementById('one-player-btn')
const twoPlayerBtn = document.getElementById('two-player-btn')

const wordInput = document.getElementById('word-input')
const addWordBtn = document.getElementById('add-word-btn')
const startGameBtn = document.getElementById('start-game-btn')
const addedWordsMessage = document.getElementById('added-words-message')

const guessInput = document.getElementById('guess-input')
const submitGuess = document.getElementById('submit-guess')
const message = document.getElementById('message')

let selectedWord
let guessedWord = []
let wrongGuesses = 0

// One player game
onePlayerBtn.addEventListener('click', () => {
  welcomeScreen.classList.add('hidden')
  onePlayerContainer.classList.remove('hidden')
  selectedWord = orchestrator.getRandomWord()
  guessedWord = Array(selectedWord.length).fill('_')
  updateWordDisplay()
})

// Two player game
twoPlayerBtn.addEventListener('click', () => {
  welcomeScreen.classList.add('hidden')
  twoPlayerContainer.classList.remove('hidden')
})

// Add word to custom word list in two player game
addWordBtn.addEventListener('click', () => {
  const word = wordInput.value.trim()
  if (word) {
    orchestrator.addCustomWord(word)
    wordInput.value = ''
    addedWordsMessage.textContent = `Added words: ${orchestrator.getAddedWords(word).join(', ')}`

    startGameBtn.classList.remove('hidden')
  }
})

// Start game with custom word list in two player game
startGameBtn.addEventListener('click', () => {
  twoPlayerContainer.classList.add('hidden')
  onePlayerContainer.classList.remove('hidden')
  const customWordList = orchestrator.addCustomWord([])
  selectedWord = customWordList.selectRandomWord()
  guessedWord = Array(selectedWord.length).fill('_')
  updateWordDisplay()
})

// Update word display
function updateWordDisplay() {
  const wordPlaceholder = document.getElementById('word-placeholder')
  wordPlaceholder.textContent = guessedWord.join(' ')
}

// Handle guess
submitGuess.addEventListener('click', () => {
  console.log('Guess button clicked')
  const letter = guessInput.value.toLowerCase()
  guessInput.value = ''

  if (orchestrator.checkGuess(letter, selectedWord)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        guessedWord[i] = letter
      }
    }
  } else {
    wrongGuesses++
    if (wrongGuesses >= 6) {
      message.textContent = `Game Over! The word was "${selectedWord}"`
      disableInputs()
    }
  }

  updateWordDisplay()

  if (!guessedWord.includes('_')) {
    message.textContent = 'Congratulations! You won!'
    disableInputs()
  }
})

function disableInputs() {
  guessInput.disabled = true
  submitGuess.disabled = true
}
// const wordList = orchestrator.getWordList()
// const wordGuesser = orchestrator.getWordGuesser()

// let selectedWord = wordList.selectRandomWord()

// const wordPlaceholder = document.getElementById('word-placeholder')
