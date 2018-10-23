import React from 'react';

const SearchBtn = (props) => (
<div>
    
   <button {...props} className="btn btn-primary">
        {props.children}
       

        </button>
        

</div>

);

    export default SearchBtn;
