import React from "react";


const ListIngredients = (props) => {
  return(
    <div className="container">
    <h3>Ingredient List for <i> {props.product}</i></h3>
      {props.ingredients}
    </div>
  )
}

export default ListIngredients;