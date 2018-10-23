import React from 'react';

const Recipes = (props) => {

return(
<div>
 {props.recipes.map(x => (
     <div>
        <button className="btn btn-success" onClick={() => props.printIngredients(x.name,x.ingredients,x.url)}> <div>{x.name}</div></button>
        <br/>
        </div>
      ))}
    </div>
)
 }
export default Recipes;