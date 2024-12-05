/**
 * Class that represents the Hangman Game component.
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
import { WordList } from './WordList.js'
import { WordGuesser } from './WordGuesser.js'
import { CustomWordList } from './CustomWordList.js'

export class HangmanOrchestrator {
  #wordList
  #wordGuesser
  #CustomWordList
  #addedWords = []

  constructor() {
    this.#wordList = new WordList()
    this.#wordGuesser = new WordGuesser()
  }

  addCustomWord(word) {
    if (!this.#addedWords.includes(word)) {
      this.#addedWords.push(word)
    }
    return this.#addedWords
  }

  getAddedWords() {
    return this.#addedWords
  }

  chooseWordList(customWordList) {
    if (customWordList) {
      return this.#addedWords
    } else {
      return this.#wordList.getWordList()
    }
  }

  getRandomWord() {
    const wordList = this.#wordList.getWordList()
    const randomWord = this.#wordList.selectRandomWord(wordList)

    return randomWord
  }

  checkGuess(letter, word) {
    return this.#wordGuesser.checkGuess(letter, word)
  }
}


