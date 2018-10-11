import React from "react";


const ListIngredients = (props) => {
  return(
    <div className="container">
      {props.ingredients}
      
      {props.nutrients.map(x => 
        <div className="text-left">{x.name} {x.value}{x.unit}</div>)}
     
    </div>
  )
}

export default ListIngredients;