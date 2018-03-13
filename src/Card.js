import React from 'react';

const Card = ({title, description, removeIdea, id}) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <button id={id} onClick={removeIdea}>Remove</button>
  </div>
)

export default Card
