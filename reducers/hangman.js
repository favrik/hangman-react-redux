import { GUESS_LETTER } from '../constants/ActionTypes'

const initialState = {
  chances: 6,
  word: '',
  misses: [],
  correct: [],
  guess: ''
}

export default function hangman(state = initialState, action) {
  const { guess } = action

  function addUniqueLetter(list, letter) {
    if (list.indexOf(letter) === -1) {
      list.push(letter)
    }
  }

  switch (action.type) {
    case GUESS_LETTER:
      let { chances, misses, correct } = state

      if (state.word.includes(guess)) {
        addUniqueLetter(correct, guess)
      } else {
        addUniqueLetter(misses, guess)
        chances--
      }

      return Object.assign({}, state, { guess, chances, misses, correct })

    default:
      return state
  }
}
