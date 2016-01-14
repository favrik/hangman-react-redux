export function getInitialStateForHangmanReducer() {
  return {
    chances: 6,
    word: 'jazz',
    misses: [],
    correct: [],
    guess: ''
  }
}

export function getInitialStateForActions() {
  return {
    hangman: getInitialStateForHangmanReducer()
  }
}
