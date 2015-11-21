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
  }

  handleKeypress(e) {
    this.props.actions.guessLetter(String.fromCharCode(e.keyCode).toLowerCase())
  }

  render() {
    const { chances, word, misses, guess, correct } = this.props.hangman

    return (
      <div className="hangman-app">
        <div className="chances-container">
          <Hangman className="chances-indicator" chances={chances} />
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
