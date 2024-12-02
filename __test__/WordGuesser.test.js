/**
 * This is a test file for the WordGuesser class.
 * @test {WordGuesser}
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
import { WordGuesser } from '../src/components/WordGuesser.js'

describe('WordGuesser', () => {
  it('should returns true if the guessed letter is in the word', () => {
    const wordGuesser = new WordGuesser()
    const word = 'hangman'

    expect(wordGuesser.checkGuess('h', word)).toBe(true)
  })

  it('should return false if the guessed letter is not in the word', () => {
    const wordGuesser = new WordGuesser()
    const word = 'hangman'

    expect(wordGuesser.checkGuess('z', word)).toBe(false)
  })
})