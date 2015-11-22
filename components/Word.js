import React, { PropTypes, Component } from 'react'
import Letter from './Letter'

export default class Word extends Component {
  letterHasBeenGuessed(letter) {
    return this.props.correct.indexOf(letter) > -1
  }

  render() {
    const letters = this.props.value.split('')

    return (
      <div>
        {letters.map((letter, index) =>
          <Letter
            guessed={this.letterHasBeenGuessed(letter)}
            key={'l' + index} value={letter} />
        )}
      </div>
    )
  }
}

Word.propTypes = {
  value: PropTypes.string.isRequired,
  correct: PropTypes.array.isRequired
}
