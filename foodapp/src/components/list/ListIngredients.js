import React from "react";


const ListIngredients = (props) => {
  return(
    <div>
      {props.ingredients}
      
      {props.nutrients.map(x => 
        <div>{x.name}</div>)}
     
    </div>
  )
}

export default ListIngredients;