import React, { PropTypes, Component } from 'react'

export default class Misses extends Component {
  render() {
    const misses = this.props.value.join(', ')
    const missesMessage = this.props.value.length ? misses + '.' : 'No misses...yet!'

    return (
      <div className="misses"><strong>Misses:</strong> {missesMessage}</div>

    )
  }
}

Misses.propTypes = {
  value: PropTypes.array.isRequired
}
