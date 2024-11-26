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