import * as types from '../constants/ActionTypes'

export function guessLetter(letter) {
  return { type: types.GUESS_LETTER, letter }
}
