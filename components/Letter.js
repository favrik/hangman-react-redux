import React, { PropTypes, Component } from 'react'

export default class Letter extends Component {
  render() {
    const { guessed, value } = this.props
    const statusClass = ' ' + (guessed ? 'guessed' : 'hidden')
    const display = guessed ? value : '_'

    return (
      <div className={'letter' + statusClass}>{display}</div>
    )
  }
}

Letter.propTypes = {
  value: PropTypes.string.isRequired,
  guessed: PropTypes.bool.isRequired
}
