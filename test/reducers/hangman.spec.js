import expect from 'expect'
import hangman from '../../reducers/hangman'
import * as types from '../../constants/ActionTypes'
import { getInitialStateForHangmanReducer as getInitialState } from '../support'

describe('hangman reducer', () => {
  it('should handle initial state', () => {
    expect(
      hangman(undefined, {})
    ).toEqual(
      {
        chances: 6,
        word: '',
        misses: [],
        correct: [],
        guess: '',
        isFetching: false
      }
    )
  })

  describe('should handle SET_WORD', () => {
    it('should set the word to be guessed', () => {
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
  })

  describe('should handle GUESS_CORRECT_LETTER', () => {
    it('should track correct guesses', () => {
      expect(
        hangman(getInitialState(),
        {
          type: types.GUESS_CORRECT_LETTER,
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
  })

  describe('should handle GUESS_WRONG_LETTER', () => {
    it('should track missed letters, decreasing chances', () => {
      expect(
        hangman(getInitialState(),
        {
          type: types.GUESS_WRONG_LETTER,
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

    it('should not decrease chances if the wrong letter is guessed multiple times', () => {
      let preparedState = getInitialState()
      preparedState.misses.push('E')
      preparedState.chances = 5

      expect(
        hangman(preparedState,
        {
          type: types.GUESS_WRONG_LETTER,
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
