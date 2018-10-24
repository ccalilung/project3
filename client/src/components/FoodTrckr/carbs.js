import React from 'react';

const Carbs = (props) => (
    <div>
        Carb Content(g):<br/>
        <input type="text" {...props}></input>
    </div>
)

export default Carbs;