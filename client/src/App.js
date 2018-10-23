import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostPage from './components/postings/PostPage'
import Login from './components/Login/Login'
import Food from './components/pages/Food'
import Blog from './components/Blog/BlogPage'
import Recipes from './components/Recipes/RecipesPage'
import Home from './components/pages/Home'


class App extends Component {
  render() {
    return (
      <div>
      
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
        <Route exact path="/nutritionfacts" component={Food} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/post" component={PostPage} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/recipes" component={Recipes} />
          </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
