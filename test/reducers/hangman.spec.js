import expect from 'expect'
import hangman from '../../reducers/hangman'
import * as types from '../../constants/ActionTypes'

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
        guess: ''
      }
    )
  })

  it('should handle GUESS_LETTER', () => {
    function getInitialState() {
      return {
        chances: 6,
        word: 'jazz',
        misses: [],
        correct: [],
        guess: ''
      }
    }

    expect(
      hangman(getInitialState(),
      {
        type: types.GUESS_LETTER,
        guess: 'E'
      })
    ).toEqual({
      guess: 'E',
      word: 'jazz',
      misses: ['E'],
      correct: [],
      chances: 5
    })

    expect(
      hangman(getInitialState(),
      {
        type: types.GUESS_LETTER,
        guess: 'a'
      })
    ).toEqual({
      guess: 'a',
      word: 'jazz',
      misses: [],
      correct: ['a'],
      chances: 6
    })

  })
})
