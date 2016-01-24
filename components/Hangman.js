import React, { PropTypes, Component } from 'react'

export default class Hangman extends Component {
  render() {
    const { chances, solved } = this.props
    let tree = [];
    for (let i = 0; i < chances; i++) {
      tree.push(i)
    }

    return (
      <div>
      {(chances === 0 || solved) &&
        <span>Game Over</span>
      }

      {tree.map((value, index) =>
        <div key={'c' + index} className="chance"></div>
      )}
      </div>

    )
  }
}

Hangman.propTypes = {
  chances: PropTypes.number.isRequired,
  solved: PropTypes.bool.isRequired
}
