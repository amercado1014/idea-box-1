import React from 'react';
import Card from './Card';

const CardContainer = ({ideas, removeIdea}) => {
  const mappedIdeas = ideas.map((idea, index) => {
    return <Card 
             key={idea.id}
             id={idea.id}
             title={idea.title}
             description={idea.description}
             removeIdea={removeIdea}
           />
  })

  return(
    <div>
      {mappedIdeas}
    </div>
  )
}

export default CardContainer
