import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Misses from '../../components/Misses'

function setup(propOverrides) {
  const props = Object.assign({
    value: []
  }, propOverrides)

  const renderer = TestUtils.createRenderer()

  renderer.render(
    <Misses {...props} />
  )

  let output = renderer.getRenderOutput()

  return { props, output, renderer }
}

describe('components', () => {
  describe('Misses', () => {
    it('should render default message when there are no misses', () => {
      const { output } = setup()
      expect(output.props.className).toEqual('misses misses-without')
    })

    it ('should render list of missed letters when there are misses', () => {
      const { props, output } = setup({ value: ['a', 'Z'] })
      expect(output.props.className).toEqual('misses misses-with')

      const [ strong, , text ] = output.props.children
      expect(text).toEqual('A, Z.')
    })
  })
})
