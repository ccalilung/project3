import React from 'react'
import API from "../utils/API";
import Search from "../search/Search"
import SearchBtn from "../search/SearchBtn"
import List from "../list/List"


class Food extends React.Component {

state = {
    food: "nutella",
    data: []
    
  };


  handleInputChange = event => {
      
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

//   loadFoods = (event) => {
      
//       event.preventDefault()
//     API.getFoods(this.state.food)
//       .then(res => {
//         let a = res.data.list.item
//         let b = []
  
//         for(let i=0;i<a.length;i++){
//         b.push(a[i].name)}
//         this.setState({data:b})
//         console.log(this.state.data)
//       })
//       .catch(err => console.log(err));
//   };

loadFoods = (event) => {
      
    event.preventDefault()
  API.getFoods(this.state.food)
    .then(res => {
      let a = res.data.list.item
      let b = []

      for(let i=0;i<a.length;i++){
      b.push({name:a[i].name, id:a[i].ndbno})}
      this.setState({data:b})
      console.log(b)
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
                     <List name={this.state.data} />
                </div>
        
        </div>
        )
  }

}

export default Food;
