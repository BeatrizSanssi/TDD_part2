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
    const customWordList = new CustomWordList()

    expect(customWordList).toBeDefined()
  })
})
