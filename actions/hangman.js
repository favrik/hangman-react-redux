import * as types from '../constants/ActionTypes'

export function guessLetter(guess) {
  return (dispatch, getState) => {
    const { word } = getState().hangman
    if (word.includes(guess)) {
      dispatch(guessCorrectLetter(guess))
    } else {
      dispatch(guessWrongLetter(guess))
    }
  }
}

export function guessCorrectLetter(guess) {
  return { type: types.GUESS_CORRECT_LETTER, guess }
}

export function guessWrongLetter(guess) {
  return { type: types.GUESS_WRONG_LETTER, guess }
}

export function setWord(word) {
  return { type: types.SET_WORD, word }
}
