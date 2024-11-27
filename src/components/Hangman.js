/**
 * Class that represents the Hangman Game component.
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
export class Hangman {
  #wordList = []

  /**
   * 
   * @param {Array} the array of words to be used in the game.
   */
  constructor(wordList) {
    if (wordList.length === 0) {
      throw new Error('No words in wordlist')
    }

    this.#wordList = wordList
  }
}

