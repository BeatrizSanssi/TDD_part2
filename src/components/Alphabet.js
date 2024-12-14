/**
 * Class that represents the alphabet.
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
export class Alphabet {
  #alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  getAlphabet() {
    return [...this.#alphabet]
  }

  /**
   * 
   * @param {String} word
   */
    disableGuessedLetter(guessedLetter) {
      this.#alphabet.forEach((letter, index) => {
        if (letter === guessedLetter) {
          this.#alphabet.splice(index, 1)
        }
      })

      const letterDisabledEvent = new CustomEvent('letterDisabled', {
        detail: {
          letter: guessedLetter
        }
      })

      document.dispatchEvent(letterDisabledEvent)
    }
}