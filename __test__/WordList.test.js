/**
 * This is a test file for the WordList class.
 * @test {WordList}
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
import { WordList } from '../src/components/WordList.js'
import { it, jest } from '@jest/globals'

const mockEmptyWordList = []
const mockWordList = ['encyclopedia', 'hangman', 'javascript', 'programming', 'technology', 'university', 'software', 'developer', 'computer', 'science', 'testing', 'doctor', 'hospital', 'flamingo', 'bronchitis', 'scarlet', 'rainbow', 'mercedes', 'word', 'student', 'proficient', 'intelligence', 'orangutang', 'cheese', 'flamboyant', 'fun', 'psychiatric', 'xylophone', 'green', 'garden', 'flowers', 'firehydrant', 'water', 'microphone', 'plastic', 'forest', 'instrument', 'politician', 'environment']

jest.mock('../src/components/WordList.js', () => {
  return jest.fn().mockImplementation(() => ({
    setWordList: jest.fn().mockResolvedValue(mockEmptyWordList),
    getWordList: jest.fn().mockResolvedValue(mockEmptyWordList)
  }))
})

describe('WordList', () => {
  it('should throw an error if there are no words in wordlist', () => {
    const wordList = new WordList()

    expect(() => wordList.setWordList(mockEmptyWordList)).toThrowError('No words in wordlist')
  })

  it('should return the wordlist', () => {
    const wordList = new WordList()

    expect(wordList.getWordList()).toEqual(mockWordList)
  })

  it('should return the updated wordlist after setting it', () => {
    const wordList = new WordList()

    wordList.setWordList(mockWordList)

    expect(wordList.getWordList()).toEqual(mockWordList)
  })

  it('should throw an error when setting a non-array word list', () => {
    const wordList = new WordList()

    expect(() => wordList.setWordList('notAnArray')).toThrowError()
  })

  it('should throw an error when setting a number as word list', () => {
    const wordList = new WordList()

    expect(() => wordList.setWordList(123)).toThrowError('Word list must be an array')
  })

  it('should throw an error when setting an object as word list', () => {
    const wordList = new WordList()

    expect(() => wordList.setWordList({ key: 'value' })).toThrowError('Word list must be an array')
  })

  it('should select a random word from the wordlist', () => {
    const wordList = new WordList()

    wordList.setWordList(mockWordList)

    const randomWord = wordList.selectRandomWord()

    expect(mockWordList).toContain(randomWord)
  })

  it('should not always return the first word in the wordlist', () => {
    const wordList = new WordList()

    wordList.setWordList(mockWordList)

    const result = []

    for (let i = 0; i < 100; i++) {
      result.push(wordList.selectRandomWord())
    }

    // Check if the result array contains more than one unique word to ensure that the method is selecting random words (from an array containing more than one word)
    const uniqueWords = result.filter((value, index, self) => self.indexOf(value) === index)

    expect(uniqueWords.length).toBeGreaterThan(1)
  })

  it('should return the length of a word', () => {
    const wordList = new WordList()

    wordList.setWordList(mockWordList)
    const word = wordList.selectRandomWord()
    const wordLength = wordList.getWordLength(word)

    expect(wordLength).toBe(word.length)
  })
})