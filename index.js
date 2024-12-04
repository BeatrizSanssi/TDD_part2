import { HangmanOrchestrator } from './src/components/HangmanOrchestrator.js'

const orchestrator = new HangmanOrchestrator()
// const wordList = orchestrator.getWordList()
// const wordGuesser = orchestrator.getWordGuesser()

// let selectedWord = wordList.selectRandomWord()

const wordPlaceholder = document.getElementById('word-placeholder')
const guessInput = document.getElementById('guess-input')
const submitGuess = document.getElementById('submit-guess')
const message = document.getElementById('message')
