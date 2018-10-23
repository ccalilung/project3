import React from 'react';

const Search = (props) => (
        
<div className="form-group">
        <label>{props.label}</label>
        <br/>
        <input type="text" id="foodTerm" {...props}/>
        <br />
</div>

);

    export default Search;
