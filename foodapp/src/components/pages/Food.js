import React from 'react'
import API from "../utils/API";
import Search from "../search/Search"
import SearchBtn from "../search/SearchBtn"
import List from "../list/List"
import ListIngredients from "../list/ListIngredients"
import ListNutrients from "../list/ListNutrients"
import Nav from '../Nav/index'

class Food extends React.Component {

state = {
    food: " ",
    data: [],
    ingredients: "",
    nutrients: [],
    list: false,
    productName: '',
    ingredientsBoolean: false,
    nutrientsBoolean: false
    
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

loadIngredients = (id,name) => {
    this.setState({productName: name})
    API.getIngredients(id)
    .then(res => {
      if(res.data.report.food.ing === undefined) {
        if (res.data.report.food.nutrients === undefined) {
        this.setState({ingredients: "No Ingredients Listed",nutrients:'No Nutrients Listed',nutrientsBoolean:true,ingredientsBoolean:true})
        } else {
          let a = res.data.report.food.nutrients
          let b = []
            for(let i=0;i<a.length;i++){
            b.push({name:a[i].name,value:a[i].value,unit:a[i].unit})}
            this.setState({ingredients: "No Ingredients Listed",nutrients:b,nutrientsBoolean:true,ingredientsBoolean:true})
        }
        return
      }

      else {      
        let a = res.data.report.food.nutrients
        let b = []
          for(let i=0;i<a.length;i++){
          b.push({name:a[i].name,value:a[i].value,unit:a[i].unit})}
          this.setState({ingredients:res.data.report.food.ing.desc,nutrients:b,nutrientsBoolean:true,ingredientsBoolean:true})
      }
    })
}

loadFoods = (event) => {
      
    event.preventDefault()
  API.getFoods(this.state.food)
    .then(res => {
      let a = res.data.list.item
      let b = []
      for(let i=0;i<a.length;i++){
      b.push({name:a[i].name, id:a[i].ndbno})}
      this.setState({data:b, list:true})
      
    })
    .catch(err => console.log(err));
};

  render() {
    let button;
    if (this.state.list === false) {
      button = null
    } 
    
    else {
      button = <List food={this.state.food} name={this.state.data} someFunction={this.loadIngredients} />
    }

    let ingredients;
    if (this.state.ingredientsBoolean === true) {
      ingredients = <ListIngredients product={this.state.productName} ingredients={this.state.ingredients}/>
    } else {ingredients = null}

    let nutrients;
    if (this.state.nutrientsBoolean === true) {
      nutrients = <ListNutrients product={this.state.productName} nutrients={this.state.nutrients}/>
    } else {nutrients = null}
   
      return(
          <div>
            <Nav />
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Search label="Search for Nutritional Facts &amp; Ingredients" value={this.state.food} onChange={this.handleInputChange} name="food"/>
                    <SearchBtn onClick={this.loadFoods}> Submit </SearchBtn>
                  </div>
                  <div className="col-md-6">
                     {button}
                  </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                  {ingredients}
                </div>
                <div className="col-md-6">
                  {nutrients}
                </div>
                </div>
              </div>
            </div>
        )
  }

}

export default Food;
