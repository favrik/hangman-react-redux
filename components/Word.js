import React, { PropTypes, Component } from 'react'
import Letter from './Letter'

export default class Word extends Component {
  determineStatus(letter) {
    return this.props.correct.indexOf(letter) > -1 ? 'guessed' : ''
  }

  render() {
    const letters = this.props.value.split('')

    return (
      <div>
        {letters.map((letter, index) =>
          <Letter status={this.determineStatus(letter)} key={'l' + index} value={letter} />
        )}
      </div>
    )
  }
}

Word.propTypes = {
  value: PropTypes.string.isRequired,
  correct: PropTypes.array.isRequired
}
