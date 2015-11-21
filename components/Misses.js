import React, { PropTypes, Component } from 'react'

export default class Misses extends Component {
  render() {
    const misses = this.props.value.join(', ')

    return (
      <div className="misses"><strong>Misses:</strong> {misses}.</div>

    )
  }
}

Misses.propTypes = {
  value: PropTypes.array.isRequired
}
