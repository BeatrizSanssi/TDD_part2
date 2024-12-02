/**
 * Class that represents the Hangman Game component.
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
import { WordList } from './WordList.js'
import { WordGuesser } from './WordGuesser.js'
export class HangmanOrchestrator {
  #wordList
  #wordGuesser

  constructor() {
    this.#wordList = new WordList()
    this.#wordGuesser = new WordGuesser()
  }
}


