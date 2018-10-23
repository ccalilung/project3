import React from 'react';

const RecipeIngredients = (props) => {

return(
<div>
  <h3>{props.label} Recipe:</h3>
  Courtesy of: {props.url}
 {props.ingredients.map(x => (
     <div>
        {x}
        </div>
      ))}
      
    </div>

)
 }
export default RecipeIngredients;