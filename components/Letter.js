import React, { PropTypes, Component } from 'react'

export default class Letter extends Component {
  render() {
    const { guessed, value } = this.props
    const theClass = guessed ? ' guessed' : 'hidden'
    const display = guessed ? value : ''

    return (
      <div className={'letter' + theClass}>{display}</div>
    )
  }
}

Letter.propTypes = {
  value: PropTypes.string.isRequired,
  guessed: PropTypes.bool.isRequired
}
