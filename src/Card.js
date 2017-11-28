import React from 'react';

const Card = ({title, description, removeIdea, id}) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <button onClick={() => removeIdea(id)}
            className='remove-idea'
      >Remove</button>
  </div>
)

export default Card
