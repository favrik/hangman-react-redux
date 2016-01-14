import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import * as actions from '../../actions/hangman'
import { getInitialStateForActions as getInitialState } from '../support'

describe('hangman actions', () => {
  it('setWord should create SET_WORD action', () => {
    expect(actions.setWord('jazz')).toEqual({
      type: types.SET_WORD,
      word: 'jazz'
    })
  })

  describe('GUESS_LETTER thunk', () => {
    it('should return a function', () => {
      expect(actions.guessLetter('A')).toBeA('function');
    })

    it('should dispatch GUESS_CORRECT_LETTER if guess is correct', () => {
      const getState = () => (getInitialState());
      const dispatch = expect.createSpy();
      actions.guessLetter('a')(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith({type: types.GUESS_CORRECT_LETTER, guess: 'a'});
    })

    it('should dispatch GUESS_WRONG_LETTER if guess is wrong', () => {
      const getState = () => (getInitialState());
      const dispatch = expect.createSpy();
      actions.guessLetter('E')(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith({type: types.GUESS_WRONG_LETTER, guess: 'E'});
    })
  })
})
