/**
 * Class that represents a word guesser.
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
export class WordGuesser {
  checkGuess(letter, word) {
    return word.includes(letter)
  }
}