import React, { Component } from 'react';

class IdeaForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: ''
    }
  }

  handleInputChange(value, property) {
    this.setState({[property]: value})
  }

  render() {
    return(
      <div className="IdeaForm">
        <input value={this.state.title} onChange={(event) => this.handleInputChange(event.target.value, 'title')} placeholder='Title'/>
        <input value={this.state.description} onChange={(event) => this.handleInputChange(event.target.value, 'description')} placeholder='Description'/>
        <button onClick={() => this.props.addIdea(this.state)}>Submit</button>
      </div>
    )
  }
}

export default IdeaForm;
