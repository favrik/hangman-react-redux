import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Letter from '../../components/Letter'

function setup(propOverrides) {
  const props = Object.assign({
    value: 'E',
    guessed: false,
  }, propOverrides)

  const renderer = TestUtils.createRenderer()

  renderer.render(
    <Letter {...props} />
  )

  let output = renderer.getRenderOutput()

  return { props, output, renderer }
}


describe('components', () => {
  describe('Letter', () => {
    it('should render correctly when guessed=false', () => {
      const { output } = setup()
      expect(output.props.className).toEqual('letter hidden')
      expect(output.props.children).toEqual('')
    })

    it ('should render correctly when guessed=true', () => {
      const { props, output } = setup({ guessed: true })
      expect(output.props.className).toEqual('letter guessed')
      expect(output.props.children).toEqual(props.value)
    })
  })
})
