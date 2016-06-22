import * as types from '../constants/ActionTypes'

export function fetchWord() {
  return (dispatch) => {
    dispatch(requestWord());

    return fetch('/word')
      .then(response => response.text())
      .then(text =>
        dispatch(receiveWord(text.toUpperCase()))
      )

  }
}

export function requestWord() {
  return { type: types.REQUEST_WORD }
}

export function receiveWord(word) {
  return { type: types.RECEIVE_WORD, word };
}

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
