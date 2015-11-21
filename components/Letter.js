import React, { PropTypes, Component } from 'react'

export default class Letter extends Component {
  render() {
    const theClass = 'letter ' + this.props.status

    return (
      <div className={theClass}>{this.props.value}</div>
    )
  }
}

Letter.propTypes = {
  value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}
