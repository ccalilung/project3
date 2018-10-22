import React from "react";


const List = (props) => {
  const name = props.food

  return(
    <div>
      <h4>USDA Food Composition Database Results:</h4>
      {props.name.map(x => (
        <div className="row">
        <button className="btn btn-success" onClick={() => props.someFunction(x.id,x.name)}>
        <div>{x.name.substring(0,40)}</div>
        </button><br/>
        </div>
      ))}
     
     
    </div>
  )}

 


export default List;