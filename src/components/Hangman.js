/**
 * Class that represents the Hangman Game component.
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
export class Hangman {
  #wordList = ['apple', 'banana', 'cherry']

  constructor() {
  }

  setWordList(wordList) {
    if (wordList.length === 0) {
      throw new Error('No words in wordlist')
    }

    if (!Array.isArray(wordList)) {
      throw new Error('Word list must be an array')
    }

    this.#wordList = wordList
  }

  getWordList() {
    return this.#wordList
  }

  checkGuess(letter, word) {
    return word.includes(letter)
  }

  selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * this.#wordList.length)

    return this.#wordList[randomIndex]
  }

  getWordLength(word) {
    return 5
  }
}


