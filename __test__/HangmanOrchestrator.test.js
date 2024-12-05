/**
 * This is a test file for the Hangman Game component.
 * @test {Hangman}
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
import { HangmanOrchestrator } from '../src/components/HangmanOrchestrator.js'

const mockWordList = ['encyclopedia', 'hangman', 'javascript', 'programming', 'technology', 'university', 'software', 'developer', 'computer', 'science', 'testing', 'doctor', 'hospital', 'flamingo', 'bronchitis', 'scarlet', 'rainbow', 'mercedes', 'word', 'student', 'proficient', 'intelligence', 'orangutang', 'cheese', 'flamboyant', 'fun', 'psychiatric', 'xylophone', 'green', 'garden', 'flowers', 'firehydrant', 'water', 'microphone', 'plastic', 'forest', 'instrument', 'politician', 'environment']

describe('HangmanOrchestrator', () => {
  it('should create an instance of Hangman', () => {
    const hangman = new HangmanOrchestrator()

    expect(hangman).toBeDefined()
  })

  it('should let the user create a custom word list', () => {
    const hangman = new HangmanOrchestrator()
    const word = 'hangman'
    const customWordList = hangman.addCustomWord(word)

    expect(customWordList).toContain(word)
  })

  it('should get the list of added words', () => {
    const hangman = new HangmanOrchestrator()
    const word = 'hangman'
    hangman.addCustomWord(word)
 
    expect(hangman.getAddedWords()).toContain(word)
  })

  it('should use the correct word list, depending on if user chooses single game play or two players', () => {
    const hangman = new HangmanOrchestrator()
    const customWordList = true
    const wordList = hangman.chooseWordList(customWordList)

    expect(wordList).not.toEqual(mockWordList)
  })

  it('should get a random word from the word list', () => {
    const hangman = new HangmanOrchestrator()
    const word = hangman.getRandomWord()

    expect(word).toBeDefined()
  })

  it('should check the guessed letter', () => {
    const hangman = new HangmanOrchestrator()
    const word = 'hangman'
    const guessedLetter = 'h'

    expect(hangman.checkGuess(guessedLetter, word)).toBe(true)
  })

  it('should only display the added word once', () => {
    const hangman = new HangmanOrchestrator()
    const word = 'hangman'
    hangman.addCustomWord(word)

    expect(hangman.addCustomWord(word)).toEqual([word])
  })
})