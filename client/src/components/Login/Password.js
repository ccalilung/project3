import React from 'react'

const Password = (props) => (
    <div>
    <label for="comment">Password:</label>
          <input type="password" class="form-control" {...props} rows="2" id="password"/>
          </div>
)

export default Password;