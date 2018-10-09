import React from "react";


const List = (props) => {
  return(
    <div>
      {props.name.map(x => (
        <div id={x.id}>{x.name}</div>
      ))}
      
     
    </div>
  )
}

export default List;