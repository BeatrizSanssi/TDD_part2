import { Alphabet } from '../src/components/Alphabet.js'

describe('Alphabet', () => {
  it('should create an instance of the Alphabet class', () => {
    const alphabet = new Alphabet()
    expect(alphabet).toBeDefined()
  })

  it('should disable guessed letter from the alphabet array', () => {
    const alphabet = new Alphabet()
    const guessedLetter = 'h'

    alphabet.disableGuessedLetter(guessedLetter)
    const updatedAlphabet = alphabet.getAlphabet()

    expect(updatedAlphabet).not.toContain(guessedLetter)
  })
})
