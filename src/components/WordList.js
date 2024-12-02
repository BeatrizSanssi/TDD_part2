/**
 * Class that represents a wordlist.
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se> 
 */
export class WordList {
  #wordList = ['encyclopedia', 'hangman', 'javascript', 'programming', 'technology', 'university', 'software', 'developer', 'computer', 'science', 'testing', 'doctor', 'hospital', 'flamingo', 'bronchitis', 'scarlet', 'rainbow', 'mercedes', 'word', 'student', 'proficient', 'intelligence', 'orangutang', 'cheese', 'flamboyant', 'fun', 'psychiatric', 'xylophone', 'green', 'garden', 'flowers', 'firehydrant', 'water', 'microphone', 'plastic', 'forest', 'instrument', 'politician', 'environment']

  setWordList(wordList) {
    if (wordList.length === 0) {
      throw new Error('No words in wordlist')
    }

    if (!Array.isArray(wordList)) {
      throw new Error('Word list must be an array')
    }

    this.#wordList = wordList
  }

  getWordList() {
    if (this.#wordList.length === 0) {
      throw new Error('No words in wordlist')
    }

    return this.#wordList
  }

  getWordLength(word) {
    return word.length
  }

  selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * this.#wordList.length)

    return this.#wordList[randomIndex]
  }
}
