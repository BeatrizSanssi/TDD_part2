import { Alphabet } from '../src/components/Alphabet.js'
import { it, jest } from '@jest/globals'

describe('Alphabet', () => {
  it('should create an instance of the Alphabet class', () => {
    const alphabet = new Alphabet()
    expect(alphabet).toBeDefined()
  })

  it('should disable guessed letter from the alphabet array', () => {
    const alphabet = new Alphabet()
    const guessedLetter = 'h'

    alphabet.handleDisableGuessedLetter(guessedLetter)
    const updatedAlphabet = alphabet.getAlphabet()

    expect(updatedAlphabet).not.toContain(guessedLetter)
  })

  it('should add the guessed letter to the disabled letters array', () => {
    const alphabet = new Alphabet()
    const guessedLetter = 'h'

    alphabet.handleDisableGuessedLetter(guessedLetter)
    const disabledLetters = alphabet.getDisabledLetters()

    expect(disabledLetters).toContain(guessedLetter)
  })

  it('should emit an event when a letter is disabled', () => {
    const mockListener = jest.fn()
    const alphabet = new Alphabet()
    const guessedLetter = 'c'

    document.addEventListener('letterDisabled', mockListener)
    alphabet.handleDisableGuessedLetter(guessedLetter)

    expect(mockListener).toHaveBeenCalled()
  })
})
