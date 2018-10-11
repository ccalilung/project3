import React from 'react'

const CreateUser = (props) => (
    <div>
    
   <button {...props} className="btn btn-success">
        {props.children}
       

        </button>
        

</div>

)

export default CreateUser;
