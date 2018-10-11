import React from 'react';
import Username from './Username'
import Password from './Password'
import CreateUser from './CreateUser'
import SubmitLogin from './SubmitLogin'
import Nav from '../Nav/Nav'
import API from "../utils/API";

class LoginPage extends React.Component {


state = {
    username: "",
    password: ""

}
handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

createUsernamePassword = (event) => {
    event.preventDefault()
    let credentials = {
        username: this.state.username,
        password: this.state.password
    }
   
    API.createUser(credentials)

}

sendUsernamePassword = () => {
    let credentials = {
        username: this.state.username,
        password: this.state.password
    }
    API.authCheck(credentials)

}

render() {
    return(
        <div>
        <Nav />
        <div className="form-group container">
        <div className="row">
        <div class="col-md-3"></div>
        <div className="col-md-6">
        <Username 
        value={this.state.username}
        onChange={this.handleInputChange}
        name="username"
        />
         <Password
         value={this.state.password}
         onChange={this.handleInputChange}
         name="password" />


            <SubmitLogin onClick={this.sendUsernamePassword}> Submit </SubmitLogin> <CreateUser onClick={this.createUsernamePassword}>I'm a new user</CreateUser>
        
          
        </div></div>
        <div class="col-md-3"></div>
        
            </div>
            </div>






    )
}
}















export default LoginPage;