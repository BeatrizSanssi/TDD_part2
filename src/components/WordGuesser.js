export class WordGuesser {


  checkGuess(letter, word) {
    return word.includes(letter)
  }
}