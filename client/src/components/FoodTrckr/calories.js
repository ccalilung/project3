import React from 'react';

const Calories = (props) => (
    <div>
        Calorie Content(kcal):<br/>
        <input type="text" {...props}></input>
    </div>
)

export default Calories;