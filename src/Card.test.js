import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Card Tests', () => {
  it('should match the yung-snapshot', () => {
    const idea = { id: 1, title: 'totes full', description: 'i ate alot of food' }
    const mockFunc = jest.fn()
    const { id, title, description } = idea
    const renderedApp = shallow(<Card id={id}
                                      title={title}
                                      description={description}
                                      removeIdea={mockFunc}
                                />)
    const removeButton = renderedApp.find('.remove-idea')
    const calls = 1
    removeButton.simulate('click')

    expect(mockFunc.mock.calls.length).toEqual(calls);
    expect(renderedApp).toMatchSnapshot()
  })
});
