/**
 * Class that represents a customized word list.
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
import { WordList } from './WordList.js'
export class CustomWordList extends WordList {
  #wordList = []

  constructor(wordList) {
    if (wordList === undefined) {
      throw new Error('Wordlist is required')
    }

    if (wordList.length === 0) {
      throw new Error('Wordlist cannot be empty')
    }

    if (!Array.isArray(wordList)) {
      throw new TypeError('Wordlist must be an array')
    }

    this.#wordList = wordList
  }
}