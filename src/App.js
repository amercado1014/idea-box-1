import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdeaForm from './IdeaForm'
import CardContainer from  './CardContainer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    const ideas = [...this.state.ideas, newIdea]
    this.setState({ideas})
  }

  removeIdea = (id) => {
    const newIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ideas: newIdeas})
  }

  render() {
    return (
      <div className="App">
        <IdeaForm 
          addIdea={this.addIdea}
        />
        <CardContainer
          ideas={this.state.ideas}
          removeIdea={this.removeIdea}
        />
      </div>
    );
  }
}

export default App;
