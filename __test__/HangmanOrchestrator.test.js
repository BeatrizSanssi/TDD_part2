/**
 * This is a test file for the Hangman Game component.
 * @test {Hangman}
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
import { HangmanOrchestrator } from '../src/components/HangmanOrchestrator.js'

describe('HangmanOrchestrator', () => {
  it('should create an instance of Hangman', () => {
    const hangman = new HangmanOrchestrator()

    expect(hangman).toBeDefined()
  })

  it('should let the user create a custom word list', () => {
    const hangman = new HangmanOrchestrator()
    const customWordList = hangman.addCustomWord()

    expect(customWordList).toBeDefined()
  })
})