import { GUESS_LETTER } from '../constants/ActionTypes'

const initialState = {
  chances: 6,
  word: 'jazz',
  misses: [],
  correct: [],
  guess: ''
}

export default function hangman(state = initialState, action) {
  switch (action.type) {
    case GUESS_LETTER:
      const newState = Object.assign({}, state, { guess: action.letter })
      if (state.word.indexOf(action.letter) === -1 && newState.misses.indexOf(action.letter) === -1) {
        newState.chances--
        newState.misses.push(action.letter)
      } else {
        newState.correct.push(action.letter)
      }

      return newState

    default:
      return state
  }
}
