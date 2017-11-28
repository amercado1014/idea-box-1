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
        <input value={this.state.title}
               name='title'
               onChange={this.handleInputChange}
               placeholder='Title'
               className='idea-title'
             />
        <input value={this.state.description}
               name='description'
               onChange={this.handleInputChange}
               placeholder='Description'
               className='idea-description'
             />
        <button onClick={() => this.props.addIdea(this.state)}
                className='submit-idea'> Submit </button>
      </div>
    )
  }
}

export default IdeaForm;
