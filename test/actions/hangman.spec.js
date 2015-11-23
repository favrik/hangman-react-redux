import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import * as actions from '../../actions/hangman'

describe('hangman actions', () => {
  it('guessLetter should create GUESS_LETTER action', () => {
    expect(actions.guessLetter('E')).toEqual({
      type: types.GUESS_LETTER,
      guess: 'E'
    })
  })

  it('setWord should create SET_WORD action', () => {
    expect(actions.setWord('jazz')).toEqual({
      type: types.SET_WORD,
      word: 'jazz'
    })
  })
})
