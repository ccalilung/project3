import React from 'react';
import Username from './Username'
import Password from './Password'
import CreateUser from './CreateUser'
import SubmitLogin from './SubmitLogin'
import Nav from '../Nav/Nav'
import API from "../utils/API";
import NewUser from './NewUser'
import WrongPassword from './WrongPassword';
import '../Login/Login.css'


class LoginPage extends React.Component {


state = {
    username: "",
    password: "",
    newUsername: "",
    newUser: false,
    wrongPassword: false,
    textColor:"",
    msg: "",


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
   
    API.createUser(credentials).then(data => {
        if (data.data === false) {
            this.setState({newUser:true,msg:"We're sorry, but the username you have selected is already taken. Please select another and try again.",textColor:"text-danger"})
        }
        else {this.setState({newUser:true,msg:"Congratulations, you are now registered with a username of: ",newUsername:data.data.username,textColor:"text-success"})
    }
    })

}

sendUsernamePassword = () => {
    let credentials = {
        username: this.state.username,
        password: this.state.password
    }
    API.authCheck(credentials).then(data => {
        if (data === false) {
            this.setState({
                wrongPassword: true
            })
        }
    })

}

render() {
    let one
    if (this.state.newUser === true) {
        one = <NewUser msg={this.state.msg} class={this.state.textColor} username={this.state.newUsername} />
    }
    let two
    if (this.state.wrongPassword === true) {
        two = <WrongPassword username={this.state.username} />
    }
    return(
        <div>
            <Nav />
            <div className="form-group container">
                <div className="row mt-4">
                <div className="col-md-12">
                    <h1 className="text-center">Welcome to the Nutrition Lookup &amp; Food Recipe App!</h1>
                    <h5 className="text-center">To get started, please enter your credentials below. If you have not yet registered, choose a username and password and select "Register as a new user."</h5>
                   
                    <div className="col-md-12 text-center">{one}{two}</div>
                </div>
                </div>
                <div className="row mt-4">
                <div className="col-md-3"><img className="beanImageOne" src={require('../images/numbeanLeft.gif')} width="auto" height="200" /></div>
                    <div className="col-md-6">
                        <Username value={this.state.username}  onChange={this.handleInputChange} name="username"/>
                        <Password value={this.state.password} onChange={this.handleInputChange} name="password" />
                        <div className="row">
                            <div className="col-md-12 text-center">
                            <div className="submitButton"><SubmitLogin onClick={this.sendUsernamePassword}> Submit </SubmitLogin></div>
                            <div className="createUser"><CreateUser onClick={this.createUsernamePassword}>Register as a new user</CreateUser></div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3"><img className="beanImageTwo" src={require('../images/numbeanRight.gif')} width="auto" height="200" /></div>
                </div>
            </div>
     
            
        </div>






    )
}
}















export default LoginPage;