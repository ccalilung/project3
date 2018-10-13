import React from 'react'
import Nav from '../Nav/Nav'
import Recipes from './Recipes'

class RecipesPage extends React.Component {




    render() {
        return(
            <div>
            <Nav classHome="nav-item" classBlog="nav-item" classRecipes="nav-item active"/>
            <Recipes />

                </div>

        )
    }
}

export default RecipesPage;