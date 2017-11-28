import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount, shallow } from 'enzyme';

describe('App Tests', () => {
  it('should render the correct components', () => {

    const renderedApp = shallow(<App />);
    const foundIdeaForm = renderedApp.find('IdeaForm');
    const foundCardContainer = renderedApp.find('CardContainer');
    const expectedLength = 1;

    expect(foundIdeaForm.length).toEqual(expectedLength);
    expect(foundCardContainer.length).toEqual(expectedLength);
  });

  it('App should match our snapshot', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp).toMatchSnapshot();
  });

  it('App should have a default state', () => {
    const renderedApp = shallow(<App />);
    const expectedState = [];

    expect(renderedApp.state('ideas')).toEqual(expectedState);
  });

  it('App should allow me to add an Idea to the state', () => {
    const renderedApp = mount(<App />);
    const ideaTitle = renderedApp.find('.idea-title')
    const ideaDescription = renderedApp.find('.idea-description')
    const submitButton = renderedApp.find('.submit-idea')

    const defaultLength  = 0
    const expectedLength = 1

    expect(renderedApp.state('ideas').length).toEqual(defaultLength)

    ideaTitle.simulate('change', {target: { value: 'suh dude' } })
    ideaDescription.simulate('change', {target: { value: 'why tho' } })
    submitButton.simulate('click')

    expect(renderedApp.state('ideas').length).toEqual(expectedLength)
  });

  it('App should render multiple ideas and should be able to remove one', () => {
    const defaultState = [
      { id: 1, title: 'totes full', description: 'i ate alot of food' },
      { id: 2, title: 'why tho', description: 'tho why' },
      { id: 3, title: 'sheeiiitt', description: 'will is pretty kewl(really kewl)' }
    ]

    const expectedState = [
      { id: 2, title: 'why tho', description: 'tho why' },
      { id: 3, title: 'sheeiiitt', description: 'will is pretty kewl(really kewl)' }
    ]

    const renderedApp = mount(<App />)

    renderedApp.state().ideas = defaultState
    renderedApp.instance().setState({ideas: defaultState})
    renderedApp.update()

    expect(renderedApp.state('ideas')).toEqual(defaultState)

    const targetedIdeaToRemove = renderedApp.find('.remove-idea').at(0);
    targetedIdeaToRemove.simulate('click')

    expect(renderedApp.state('ideas')).toEqual(expectedState)
  })

});
