import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostPage from './components/postings/PostPage'
import Login from './components/Login/Login'
import Food from './components/pages/Food'


class App extends Component {
  render() {
    return (
      <div>
      
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Food} />
        <Route exact path="/post" component={PostPage} />
          </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
