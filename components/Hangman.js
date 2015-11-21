import React, { PropTypes, Component } from 'react'

export default class Hangman extends Component {
  render() {
    let tree = [];
    for (let i = 0; i < this.props.chances; i++) {
      tree.push(i)
    }

    return (
      <div>
      {tree.map((value, index) =>
        <div key={'c' + index} className="chance"></div>
      )}
      </div>

    )
  }
}

Hangman.propTypes = {
  chances: PropTypes.number.isRequired
}
