import React from 'react'
import Nav from '../Nav/Nav'
import Recipes from './Recipes'
import API from '../utils/API';

class RecipesPage extends React.Component {
state = {
search: 'chicken',
recipes: []

}

findRecipes = (event) => {
    event.preventDefault()

    API.findRecipes(this.state.search)
        .then(data => {
           let a = data.data.hits
           let b = [];
           for (let i=0;a.length;i++) {
               b.push(a[i])
           }
            this.setState({recipes:b})
            // for(let i = 0; i<a.length;i++) {
            //     for(let j=0;j<a[i].recipe.ingredientList.length;i++){
            //         b.push[{a.recipe.label:a.recipe.ingredientList}]
            //     }
            // }
        
       
})}


    render() {
        return(
            <div>
            <Nav classHome="nav-item" classBlog="nav-item" classRecipes="nav-item active"/>
            <button type="button" onClick={this.findRecipes}>Button</button>
            <Recipes theData={this.state.recipes}/>

                </div>

        )
    }
}

export default RecipesPage;