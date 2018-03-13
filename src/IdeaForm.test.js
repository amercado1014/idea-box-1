import React from 'react'
import { shallow, mount } from 'enzyme'
import IdeaForm from './IdeaForm'

describe('IdeaForm', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<IdeaForm />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should update the state when handle change is called', () => {
    const wrapper = shallow(<IdeaForm />)
    const mockEvent = { target: { value: 'some string', name: 'title' } }
    wrapper.instance().handleInputChange(mockEvent)
    expect(wrapper.state('title')).toEqual('some string')
  })

  //it('should not update the state if handle change is called with no name', () => {
  //  const wrapper = shallow(<IdeaForm />)
  //  const expected = {...wrapper.state}
  //  const mockEvent = { target: { value: 'val' } }
  //  wrapper.instance().handleInputChange(mockEvent)
  //  expect(wrapper.state()).toEqual(expected)
  //})
  
  it('should call addIdea onHandleSubmit', () => {
    const mockAddIdea = jest.fn()
    const mockEvent = { preventDefault: jest.fn() }
    const wrapper = shallow(<IdeaForm addIdea={mockAddIdea} />)
    wrapper.instance().handleSubmit(mockEvent)
    expect(mockAddIdea).toHaveBeenCalled()
  })

  it('should reset state onHandleSubmit', () => {
  })

})
