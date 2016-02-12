import React, { PropTypes, Component } from 'react'

export default class Misses extends Component {
  render() {
    const { value } = this.props
    const missesMessage = this.props.value.length ? value.map(x => x.toUpperCase()).join(', ') + '.' : 'No misses...yet!'
    const missesClass = 'misses ' + (value.length ? 'misses-with' : 'misses-without')

    return (
      <div className={missesClass}><strong>Misses:</strong> {missesMessage}</div>
    )
  }
}

Misses.propTypes = {
  value: PropTypes.array.isRequired
}
