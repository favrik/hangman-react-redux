import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Hangman from '../components/Hangman'
import Word from '../components/Word'
import Misses from '../components/Misses'
import * as HangmanActions from '../actions/hangman'

class App extends Component {
  componentDidMount() {
    window.addEventListener("keypress", e => this.handleKeypress(e), false)

    this.props.actions.setWord('jazz')
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', e => this.handleKeypress(e), false);
  }

  handleKeypress(e) {
    if (this.props.hangman.chances > 0 && !this.solved()) {
      this.props.actions.guessLetter(String.fromCharCode(e.keyCode).toLowerCase())
    }
  }

  solved() {
    const unique = function(xs) {
      return xs.filter(function(x, i) {
        return xs.indexOf(x) === i
      })
    }

    return unique(this.props.hangman.word.split('')).length === this.props.hangman.correct.length
  }

  render() {
    const { chances, word, misses, guess, correct } = this.props.hangman

    return (
      <div className="hangman-app">
        <button onClick={ this.props.actions.fetchWord }>
          Grab Random Word!
        </button>

        <div className="chances-container">
          <Hangman className="chances-indicator" chances={chances} solved={this.solved()} />
        </div>
        <div className="word-container">
          <Word value={word} correct={correct} />
        </div>
        <Misses value={misses} />
      </div>
    )
  }
}

App.propTypes = {
  hangman: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    hangman: state.hangman
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HangmanActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
