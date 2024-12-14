/**
 * This is a test file for the custom word list class.
 * @test {CustomWordList}
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
import { CustomWordList } from '../src/components/CustomWordList.js'

const mockEmptyWordList = []
const mockWordList = ['encyclopedia', 'hangman', 'javascript', 'programming', 'technology', 'university', 'software', 'developer', 'computer', 'science', 'testing', 'doctor', 'hospital', 'flamingo', 'bronchitis', 'scarlet', 'rainbow', 'mercedes', 'word', 'student', 'proficient', 'intelligence', 'orangutang', 'cheese', 'flamboyant', 'fun', 'psychiatric', 'xylophone', 'green', 'garden', 'flowers', 'firehydrant', 'water', 'microphone', 'plastic', 'forest', 'instrument', 'politician', 'environment']

describe('CustomWordList', () => {
  it('should create an instance of custom word list', () => {
    const wordList = ['hangman', 'testing', 'jest']
    const customWordList = new CustomWordList(wordList)

    expect(customWordList).toBeDefined()
  })

  it('should throw an error if there is no wordlist sent as an argument at instantiation', () => {
    expect(() => new CustomWordList()).toThrowError('Wordlist is required')
  })

  it('should throw an error if an empty wordlist is sent as an argument at instantiation', () => {
    expect(() => new CustomWordList(mockEmptyWordList)).toThrowError('Wordlist cannot be empty')
  })

  it('should throw a type error if a number is sent as an argument at instantiation', () => {
    expect(() => new CustomWordList(123)).toThrowError('Wordlist must be an array')
  })

  it('should return the wordlist', () => {
    const customWordList = new CustomWordList(mockWordList)
    customWordList.setWordList(mockWordList)

    expect(customWordList.getWordList()).toEqual(mockWordList)
  })

  it ('should add a word to the wordlist', () => {
    const customWordList = new CustomWordList(mockWordList)

    const newWord = 'hello'
    customWordList.handleAddWord(newWord)
    expect(customWordList.getWordList()).toContain(newWord)
  })

  it('should remove a word from the wordlist', () => {
    const customWordList = new CustomWordList(mockWordList)
    const randomIndex = Math.floor(Math.random() * mockWordList.length)
    const randomWordToRemove = mockWordList[randomIndex]

    customWordList.handleRemoveWord(randomWordToRemove)
    expect(customWordList.getWordList()).not.toContain(randomWordToRemove)
  })

  it ('should select a random word from the newly created wordlist', () => {
    const customWordList = new CustomWordList(mockWordList)
    
    customWordList.setWordList(mockWordList)
    const randomWord = customWordList.selectRandomWord()
    expect(mockWordList).toContain(randomWord)  
  })
})
