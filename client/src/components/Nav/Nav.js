import React from "react";

const Nav = (props) => (
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <a className="navbar-brand" href="/home"> Nutrition and Recipe App
    </a>

    <ul className="navbar-nav mr-auto">
      <li className={props.classHome}>
        <a className="nav-link" href="/nutritionfacts">Nutrition Facts <span class="sr-only">(current)</span></a>
      </li>
      <li className={props.classBlog}>
        <a className="nav-link" href="/blog">Blog</a>
      </li>
      <li className={props.classRecipes}>
        <a className="nav-link" href="/recipes">Recipes</a>
      </li>
      <li className={props.classFoodtrckr}>
        <a className="nav-link" href="/foodtrckr">FoodTrckr</a>
      </li>
      </ul>

      <ul className="navbar-nav float:right">
      <li className={props.classLogin}>
        <a className="nav-link" href="/">Login</a>
      </li>
      </ul>
      
  </nav>
  
);

export default Nav;
