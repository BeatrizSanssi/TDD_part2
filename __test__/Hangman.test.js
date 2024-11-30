/**
 * This is a test file for the Hangman Game component.
 * @test {Hangman}
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
import { Hangman } from '../src/components/Hangman.js'
import { it, jest } from '@jest/globals'

const mockEmptyWordList = []
const mockWordList = ['apple', 'banana', 'cherry']

jest.mock('../src/components/Hangman.js', () => {
  return jest.fn().mockImplementation(() => ({
      setWordList: jest.fn().mockResolvedValue(mockEmptyWordList),
      getWordList: jest.fn().mockResolvedValue(mockEmptyWordList)
  }))
})

describe('Hangman', () => {
  it('should create an instance of Hangman', () => {
    const hangman = new Hangman()

    expect(hangman).toBeDefined()
  })

  it('should throw an error if there are no words in wordlist', () => {
    const hangman = new Hangman()

    expect(() => hangman.setWordList(mockEmptyWordList)).toThrowError('No words in wordlist')
  })

  it('should return the wordlist', () => {
    const hangman = new Hangman()

    expect(hangman.getWordList()).toEqual(mockWordList)
  })

  it('should returns true if the guessed letter is in the word', () => {
    const hangman = new Hangman()
    const word = 'hangman'
    expect(hangman.checkGuess('h', word)).toBe(true)
  })

  it('should return false if the guessed letter is not in the word', () => {
    const hangman = new Hangman()
    const word = 'hangman'
    expect(hangman.checkGuess('z', word)).toBe(false)
  })
})
