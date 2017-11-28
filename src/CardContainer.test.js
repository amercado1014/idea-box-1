import CardContainer from './CardContainer'
import React from 'react'
import { shallow } from 'enzyme'

describe('CardContainer test', () => {
  it('should match the snapshot :D', () => {
    const mockIdeas = []
    const renderedApp = shallow(<CardContainer ideas={mockIdeas}/>);
    expect(renderedApp).toMatchSnapshot()
  })

  it('should render 3 cards', () => {
    const ideasToRender = [
      { id: 1, title: 'totes full', description: 'i ate alot of food' },
      { id: 2, title: 'why tho', description: 'tho why' },
      { id: 3, title: 'sheeiiitt', description: 'will is pretty kewl(really kewl)' }
    ]

    const expectCardLength = 3
    const renderedApp = shallow(<CardContainer ideas={ideasToRender}/>)
    //
    // expect(renderedApp.find('Card').length).toEqual(expectCardLength);
    expect(renderedApp).toMatchSnapshot()
  });
})
