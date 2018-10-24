import React from 'react';

const Food = (props) => (
    <div>
        Food Name:<br/>
        <input type="text" {...props}></input>
    </div>
)

export default Food;
   