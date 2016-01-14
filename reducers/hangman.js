import { GUESS_LETTER, SET_WORD } from '../constants/ActionTypes'

const initialState = {
  chances: 6,
  word: '',
  misses: [],
  correct: [],
  guess: ''
}

export default function hangman(state = initialState, action) {
  switch (action.type) {
    case GUESS_LETTER:
      let { chances } = state
      let misses = state.misses.slice(0)
      let correct = state.correct.slice(0)

      if (state.word.includes(action.guess)) {
        if (correct.indexOf(action.guess) === -1) {
          correct.push(action.guess)
        }
      } else {
        if (misses.indexOf(action.guess) === -1) {
          misses.push(action.guess)
          chances--
        }
      }

      return Object.assign({}, state, { guess: action.guess, chances, misses, correct })

    case SET_WORD:
      return Object.assign({}, state, { word: action.word })

    default:
      return state
  }
}
