/**
 * Class that represents a customized word list.
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
import { WordList } from './WordList.js'
export class CustomWordList extends WordList {
  #wordList = []

  /**
   * 
   * @param {Array} wordList 
   */
  constructor(wordList) {
    super(wordList)

    if (wordList === undefined) {
      throw new Error('Wordlist is required')
    }

    if (wordList.length === 0) {
      throw new Error('Wordlist cannot be empty')
    }

    if (!Array.isArray(wordList)) {
      throw new TypeError('Wordlist must be an array')
    }

    this.setWordList(wordList)
  }

  /**
   * 
   * @param {String} word 
   */
  addWord(word) {
    const wordList = this.getWordList()
    wordList.push(word)
    this.setWordList(wordList)
  }

  /**
   * 
   * @param {String} wordToBeRemoved 
   */
  removeWord(wordToBeRemoved) {
    const wordList = this.getWordList()

    wordList.forEach((word) => {
      if (word === wordToBeRemoved) {
        wordList.splice(word, 1)
      }
    })
  }
}
