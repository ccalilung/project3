import React from 'react';

const RecipeIngredients = (props) => {

return(
<div>
 {props.ingredients.map(x => (
     <div>
        {x}
        </div>
      ))}
    </div>
)
 }
export default RecipeIngredients;