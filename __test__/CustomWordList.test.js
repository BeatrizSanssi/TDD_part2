/**
 * This is a test file for the custom word list class.
 * @test {CustomWordList}
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
import { CustomWordList } from '../src/components/CustomWordList.js'

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
    expect(() => new CustomWordList([])).toThrowError('Wordlist cannot be empty')
  })
})
