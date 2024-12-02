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

  it('should return the updated wordlist after setting it', () => {
    const hangman = new Hangman()
    hangman.setWordList(mockWordList)

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

  it('should throw an error when setting a non-array word list', () => {
    const hangman = new Hangman()
    expect(() => hangman.setWordList('notAnArray')).toThrowError()
  })

  it('should throw an error when setting a number as word list', () => {
    const hangman = new Hangman()
    expect(() => hangman.setWordList(123)).toThrowError('Word list must be an array')
  })

  it('should throw an error when setting an object as word list', () => {
    const hangman = new Hangman()
    expect(() => hangman.setWordList({ key: 'value' })).toThrowError('Word list must be an array')
  })

  it('should select a random word from the wordlist', () => {
    const hangman = new Hangman()

    hangman.setWordList(mockWordList)

    const randomWord = hangman.selectRandomWord()

    expect(mockWordList).toContain(randomWord)
  })

  it('should not always return the first word in the wordlist', () => {
    const hangman = new Hangman()

    hangman.setWordList(mockWordList)

    const result = []

    for (let i = 0; i < 100; i++) {
      result.push(hangman.selectRandomWord())
    }

    // Check if the result array contains more than one unique word to ensure that the method is selecting random words (from an array containing more than one word)
    const uniqueWords = result.filter((value, index, self) => self.indexOf(value) === index)

    expect(uniqueWords.length).toBeGreaterThan(1)
  })

  it('should return the length of a word', () => {
    const hangman = new Hangman()
    hangman.setWordList(mockWordList)
    const word = hangman.selectRandomWord()
    const wordLength = hangman.getWordLength(word)

    expect(wordLength).toBe(word.length)
  })
})