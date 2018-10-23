import React from 'react'
import Nav from '../Nav/Nav'
import Recipes from './Recipes'
import API from '../utils/API';
import RecipeIngredients from './RecipeIngredients'
import Search from '../search/Search'
import SearchBtn from '../search/SearchBtn'

class RecipesPage extends React.Component {
state = {
search: '',
recipes: [],
ingredients: [],
chosen: '',
url: ''


}

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

findRecipes = (event) => {
    event.preventDefault()

    API.findRecipes(this.state.search)
        .then(data => {
            console.log(data)
           let a = data.data.hits
           let b = [];
           
           for (let i=0;i<a.length;i++) {
                    b.push({name:a[i].recipe.label, ingredients:a[i].recipe.ingredientLines,url:a[i].recipe.url})
                    }
            this.setState({recipes:b}) 
            console.log(b)

})}

printIngredients = (name,ingredients,url) => {
    let b = []
    ingredients.map(x => {
        b.push(x)
    })
    this.setState({chosen:name,ingredients:b,url:url})    
}

    render() {
        let three
        if (this.state.chosen !== '') {
            three = <RecipeIngredients label={this.state.chosen} ingredients={this.state.ingredients} url={this.state.url} />
        }
        return(
            <div>
            
            <Nav classHome="nav-item" classBlog="nav-item" classRecipes="nav-item active"/>
            <div className="container-fluid">
            <div className="row text-center">
            <div className="col-md-12">
            <h1>Recipe Finder</h1>
            <h6>powered by Edamam API</h6>
            </div>
            </div>
            <div className="row">
                <div className="col-md-3 offset-md-1">
                <Search value={this.state.search} onChange={this.handleInputChange} name="search" />
                <SearchBtn onClick={this.findRecipes}>Search for Recipes</SearchBtn>     
                </div>
                <div className="col-md-3">
                <Recipes recipes={this.state.recipes} printIngredients={this.printIngredients}/>
                </div>
            <div className="col-md-4">
                {three}
            </div>
            </div>
            
            
                
                </div>
                </div>
        )
    }
}

export default RecipesPage;