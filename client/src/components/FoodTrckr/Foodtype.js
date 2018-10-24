import React from 'react';

const Food = (props) => (
    <div>
        Meal (breakfast, etc.):<br/>
        <input type="text" {...props}></input>
    </div>
)

export default Food;
   