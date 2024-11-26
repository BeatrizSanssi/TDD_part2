/**
 * This is a test file for the Auth check component.
 * @test {Hangman}
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */

describe('Hangman', () => {
  it('should render Hangman component', () => {
    const hangman = new Hangman()
    // const Hangman = require('../Hangman')
    expect(Hangman).toBeDefined()
  })
  // it('should throw an error if there are no words in wordlist', () => {
  //   const hangman = new Hangman()
  //   const wordlist = []
  //   expect(() => hangman.guessWord()).toThrowError('No words in wordlist')
  // })
})