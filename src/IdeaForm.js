import React, { Component } from 'react';

class IdeaForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: ''
    }
  }

  handleInputChange = (event) => {
    const { value, name } = event.target
    this.setState({[name]: value})
  }

  render() {
    return(
      <div className="IdeaForm">
        <input value={this.state.title} name='title' onChange={this.handleInputChange} placeholder='Title'/>
        <input value={this.state.description} name='description' onChange={this.handleInputChange} placeholder='Description'/>
        <button onClick={() => this.props.addIdea(this.state)}>Submit</button>
      </div>
    )
  }
}

export default IdeaForm;
