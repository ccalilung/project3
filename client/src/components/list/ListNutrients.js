import React from "react";


const ListNutrients = (props) => {
  console.log(props.nutrients)
  return(
    <div>
     <h3>Nutritional Facts for <i>{props.product}</i></h3>
     
      {props.nutrients.map(x => 
        <div> {x.name}: {x.value}{x.unit}
        </div>)}
     
    </div>
  )
}

export default ListNutrients;