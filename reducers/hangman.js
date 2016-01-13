import { GUESS_LETTER, SET_WORD } from '../constants/ActionTypes'

const initialState = {
  chances: 6,
  word: '',
  misses: [],
  correct: [],
  guess: ''
}

export default function hangman(state = initialState, action) {
  function addUniqueLetter(list, letter) {
    if (list.indexOf(letter) === -1) {
      list.push(letter)
    }
  }

  switch (action.type) {
    case GUESS_LETTER:
      const { guess } = action

      let { chances } = state
      let misses = state.misses.slice(0)
      let correct = state.correct.slice(0)

      if (state.word.includes(guess)) {
        addUniqueLetter(correct, guess)
      } else {
        addUniqueLetter(misses, guess)
        chances--
      }

      return Object.assign({}, state, { guess, chances, misses, correct })

    case SET_WORD:
      return Object.assign({}, state, { word: action.word })

    default:
      return state
  }
}
