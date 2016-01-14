import expect from 'expect'
import hangman from '../../reducers/hangman'
import * as types from '../../constants/ActionTypes'

describe('hangman reducer', () => {
  function getInitialState() {
    return {
      chances: 6,
      word: 'jazz',
      misses: [],
      correct: [],
      guess: ''
    }
  }

  it('should handle initial state', () => {
    expect(
      hangman(undefined, {})
    ).toEqual(
      {
        chances: 6,
        word: '',
        misses: [],
        correct: [],
        guess: ''
      }
    )
  })

  it('should handle SET_WORD', () => {
    expect(
      hangman(getInitialState(),
        { type: types.SET_WORD, word: 'retro' }
      )
    ).toEqual({
      guess: '',
      word: 'retro',
      misses: [],
      correct: [],
      chances: 6
    })
  })


  describe('should handle GUESS_LETTER', () => {
    let initialState = getInitialState()

    it('should track missed letters, decreasing chances', () => {
      expect(
        hangman(initialState,
        {
          type: types.GUESS_LETTER,
          guess: 'E'
        })
      ).toEqual({
        guess: 'E',
        word: 'jazz',
        misses: ['E'], // misses are tracked
        correct: [],
        chances: 5 // chances is decreased
      })
    })

    it('should track correct guesses', () => {
      expect(
        hangman(initialState,
        {
          type: types.GUESS_LETTER,
          guess: 'a'
        })
      ).toEqual({
        guess: 'a',
        word: 'jazz',
        misses: [],
        correct: ['a'], // correct guess is tracked
        chances: 6
      })
    })

    it('should not decrease chances if the wrong letter is guessed multiple times', () => {
      let preparedState = getInitialState()
      preparedState.misses.push('E')
      preparedState.chances = 5

      expect(
        hangman(preparedState,
        {
          type: types.GUESS_LETTER,
          guess: 'E'
        })
      ).toEqual({
        guess: 'E',
        word: 'jazz',
        misses: ['E'],
        correct: [],
        chances: 5 // chances is not decreased
      })

    })
  })
})
