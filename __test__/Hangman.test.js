/**
 * This is a test file for the Hangman Game component.
 * @test {Hangman}
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
import { Hangman } from '../src/components/Hangman.js'

describe('Hangman', () => {
  it('should create an instance of Hangman', () => {
    const hangman = new Hangman()

    expect(hangman).toBeDefined()
  })

  it('should throw an error if there are no words in wordlist', () => {
    const wordList = []

    const hangman = new Hangman(wordList)

    expect(() => hangman.guessWord()).toThrowError('No words in wordlist')
  })
})