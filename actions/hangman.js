import * as types from '../constants/ActionTypes'

export function guessLetter(guess) {
  return { type: types.GUESS_LETTER, guess }
}

export function setWord(word) {
  return { type: types.SET_WORD, word }
}
