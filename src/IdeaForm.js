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

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addIdea(this.state)
    this.setState({
      title: '',
      description: '',
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="IdeaForm">
        <input value={this.state.title} name='title' onChange={this.handleInputChange} placeholder='Title' className="title"/>
        <input value={this.state.description} name='description' onChange={this.handleInputChange} placeholder='Description' className="desc"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default IdeaForm;
