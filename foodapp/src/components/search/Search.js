import React from 'react';

const Search = (props) => (
<div className="form-group">
    
        Food: <br/>
        <input type="text" id="foodTerm" {...props}/>
        <br />
</div>

);

    export default Search;
