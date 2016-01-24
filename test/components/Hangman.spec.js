import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Hangman from '../../components/Hangman'

function setup(propOverrides) {
  const props = Object.assign({
    chances: 6,
    solved: false
  }, propOverrides)

  const renderer = TestUtils.createRenderer()
  renderer.render(<Hangman {...props} />)
  const output = renderer.getRenderOutput()

  return { props, output, renderer }
}

describe('components', () => {
  describe('Hangman', () => {
    it('should render container', () => {
      const { output } = setup()
      expect(output.type).toBe('div')
      expect(output.props.className).toBe(undefined)
    })

    it('should render "Game Over" if chances are over', () => {
      const { output, props } = setup({ chances: 0 })
      const [ span ] = output.props.children
      expect(span.type).toBe('span')
      expect(span.props.children).toBe('Game Over')
    })

    it('should render "Game Over" when game is solved', () => {
      const { output, props } = setup({ solved: true })
      const [ span ] = output.props.children
      expect(span.type).toBe('span')
      expect(span.props.children).toBe('Game Over')
    })

    it('should NOT render "Game Over" if there are chances left', () => {
      const { output, props } = setup({ chances: 2 })
      const [ span ] = output.props.children
      expect(span).toBe(false)
    })
  })
})

