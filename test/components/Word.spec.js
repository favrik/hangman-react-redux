import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Word from '../../components/Word'
import Letter from '../../components/Letter'

function setup(propOverrides) {
  const props = Object.assign({
    value: 'jazz',
    correct: []
  }, propOverrides)

  const renderer = TestUtils.createRenderer()
  renderer.render(<Word {...props} />)
  const output = renderer.getRenderOutput()

  return { props, output, renderer }
}

describe('components', () => {
  describe('Word', () => {
    it('should render container', () => {
      const { output } = setup()
      expect(output.type).toBe('div')
      expect(output.props.className).toBe(undefined)
    })

    it('should render Letter list', () => {
      const { output, props } = setup()
      expect(output.props.children.length).toBe(4)
      let letters = props.value.split('')
      output.props.children.forEach((item, i) => {
        expect(item.type).toBe(Letter)
        expect(item.props.value).toBe(letters[i])
        expect(item.props.guessed).toBe(false)
      })
    })
  })
})

