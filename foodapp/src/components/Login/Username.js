import React from 'react'

const Login = (props) => (

    <div>
    
    <label for="comment">Username:</label>
          <input type="text" class="form-control" rows="2" {...props} id="username"/>
          </div>
)

export default Login;