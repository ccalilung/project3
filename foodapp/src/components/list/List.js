import React from "react";


const List = (props) => {
  return(
    <div>
      {props.name.map(x => (
        <button className="btn btn-success" onClick={() => props.someFunction(x.id)}><div>{x.name}</div></button>
      ))}
      
     
    </div>
  )
}

export default List;