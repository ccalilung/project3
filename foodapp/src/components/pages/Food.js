import React from 'react'
import API from "../utils/API";
import Search from "../search/Search"
import SearchBtn from "../search/SearchBtn"
import List from "../list/List"
import ListIngredients from "../list/ListIngredients"


class Food extends React.Component {

state = {
    food: " ",
    data: [],
    ingredients: "",
    nutrients: []
    
  };


  handleInputChange = event => {
      
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

loadIngredients = (id) => {
    // event.preventDefault()
    console.log(id)
    API.getIngredients(id)
    .then(res => {
    let a = res.data.report.food.nutrients
      let b = []
      for(let i=0;i<a.length;i++){
      b.push({name:a[i].name})}
        this.setState({ingredients:res.data.report.food.ing.desc,nutrients:b})
        
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
      this.setState({data:b})
      
    })
    .catch(err => console.log(err));
};

  render() {
      return(
          <div>
        <Search
        value={this.state.food}
        onChange={this.handleInputChange}
        name="food"
        />
        <SearchBtn onClick={this.loadFoods}> Submit </SearchBtn>
       
              <div>
                     <List name={this.state.data} someFunction={this.loadIngredients} />
                </div>
        
        <div>
            <ListIngredients ingredients={this.state.ingredients} nutrients={this.state.nutrients}/>
        </div>
        </div>
        )
  }

}

export default Food;
