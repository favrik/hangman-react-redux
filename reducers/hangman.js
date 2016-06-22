import { GUESS_WRONG_LETTER, GUESS_CORRECT_LETTER, SET_WORD, REQUEST_WORD, RECEIVE_WORD } from '../constants/ActionTypes'

const initialState = {
  chances: 6,
  word: '',
  misses: [],
  correct: [],
  guess: '',
  isFetching: false
}

export default function hangman(state = initialState, action) {
  switch (action.type) {
    case GUESS_CORRECT_LETTER:
      let correct = state.correct.slice(0)

      if (correct.indexOf(action.guess) === -1) {
        correct.push(action.guess)
      }

      return Object.assign({}, state, { guess: action.guess, correct })

    case GUESS_WRONG_LETTER:
      let { chances } = state
      let misses = state.misses.slice(0)

      if (misses.indexOf(action.guess) === -1) {
        misses.push(action.guess)
        chances--
      }

      return Object.assign({}, state, { guess: action.guess, misses, chances })

    case SET_WORD:
      return Object.assign({}, state, { word: action.word })

    case REQUEST_WORD:
      return Object.assign({}, state, { isFetching: true} )

    case RECEIVE_WORD:
      return Object.assign({}, initialState, { word: action.word })

    default:
      return state
  }
}
