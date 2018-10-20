import React from 'react'
import Nav from '../Nav/Nav'
import Recipes from './Recipes'
import API from '../utils/API';
import RecipeIngredients from './RecipeIngredients'
import Search from '../search/Search'
import SearchBtn from '../search/SearchBtn'

class RecipesPage extends React.Component {
state = {
search: 'chicken',
recipes: [],
ingredients: []


}

findRecipes = (event) => {
    event.preventDefault()

    API.findRecipes(this.state.search)
        .then(data => {
           let a = data.data.hits
           let b = [];
           
           for (let i=0;i<a.length;i++) {
                    b.push({name:a[i].recipe.label, ingredients:a[i].recipe.ingredientLines})
                    }
            this.setState({recipes:b}) 
            console.log(b)

})}

printIngredients = (ingredients) => {
    let b = []
    ingredients.map(x => {
        b.push(x)
    })
    this.setState({ingredients:b})    
}
    


    render() {
        return(
            <div>
            
            <Nav classHome="nav-item" classBlog="nav-item" classRecipes="nav-item active"/>
            <div className="container">
            
            <Search />
            <SearchBtn>Search for Recipes</SearchBtn>
            <Recipes recipes={this.state.recipes} printIngredients={this.printIngredients}/>
            <RecipeIngredients ingredients={this.state.ingredients} />
                
                </div>
                </div>
        )
    }
}

export default RecipesPage;