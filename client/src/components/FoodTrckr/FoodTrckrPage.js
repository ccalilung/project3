import React from 'react';
import Food from './Foodtype';
import Fat from './Fatcontent';
import Sugar from './sugar';
import Protein from './protein'
import Sodium from './sodium'
import Carbs from './carbs'
import Calories from './calories'
import Nav from '../Nav/Nav'
import API from '../utils/API';
import Plot from 'react-plotly.js'

class FoodTrckrPage extends React.Component {

    state = {
        food: '',
        calories: 0,
        carbs: 0,
        fat: 0,
        protein: 0,
        sodium: 0,
        sugar: 0,
        caloriesArr: [],
        carbsArr: [],
        fatArr: [],
        proteinArr: [],
        sodiumArr: [],
        sugarArr: [],
        xAxis: [],
        graph: false,
        measure: '',
        error: false

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    submitEntry = () => {
        
        let obj = {
            food: this.state.food,
            calories: Number(this.state.calories),
            carbs: Number(this.state.carbs),
            fat: Number(this.state.fat),
            protein: Number(this.state.protein),
            sodium: Number(this.state.sodium),
            sugar: Number(this.state.sugar),
        }


        if (isNaN(obj.calories) || isNaN(obj.carbs) || isNaN(obj.fat) || isNaN(obj.protein) || isNaN(obj.sodium) || isNaN(obj.sugar) ){
            this.setState({error:true})
            return
        } 
        else {
            this.setState({error:false})
        API.addFoodEntry(obj).then(data => {
        
        })
    }
    }

    getGraph = (individual) => {
    //   event.preventDefault();
    this.setState({caloriesArr: [],
        carbsArr: [],
        fatArr: [],
        proteinArr: [],
        sodiumArr: [],
        sugarArr: [],
        xAxis: [],
        graph: false
        })
        API.createGraph().then(data=>{
            // console.log(data.data)
            let calories = []
            let carbs = []
            let fat = []
            let protein = [];
            let sodium = [];
            let sugar = [];
            let xAxis = [];

        if (individual === 'calories') {
            data.data.forEach(food => {
                calories.push(food.calories)
                xAxis.push(food.food)
            })
            this.setState({graph:true,xAxis:xAxis,caloriesArr:calories,measure:'calories x 1000'})
        }

        else if (individual === 'carbs') {
            data.data.forEach(food => {
                carbs.push(food.carbs)
                xAxis.push(food.food)
            })
            this.setState({graph:true,xAxis:xAxis,carbsArr:carbs,measure:'grams'})
        }
        else if (individual === 'fat') {
            data.data.forEach(food => {
                fat.push(food.fat)
                xAxis.push(food.food)
            })
            this.setState({graph:true,xAxis:xAxis,fatArr:fat,measure:'grams'})
        }

        else if (individual === 'protein') {
            data.data.forEach(food => {
                protein.push(food.protein)
                xAxis.push(food.food)
            })
            this.setState({graph:true,xAxis:xAxis,proteinArr:protein,measure:'grams'})
        }

        else if (individual === 'sugar') {
            data.data.forEach(food => {
                sugar.push(food.sugar)
                xAxis.push(food.food)
            })
            this.setState({graph:true,xAxis:xAxis,sugarArr:sugar,measure:'grams'})
        }

        else if (individual === 'sodium') {
            data.data.forEach(food => {
                sodium.push(food.sodium)
                xAxis.push(food.food)
            })
            this.setState({graph:true,xAxis:xAxis,sodiumArr:sodium,measure:'milligrams'})
        }

        
        })
    }

    deleteData = () => {
        API.deleteGraphs().then(() =>{

        })
    }
    

    render() {
        let thePlot;
        let errorMsg;

        if(this.state.error === true) {
            errorMsg = <h2 className="text-danger text-center">You have entered a value other than a number into the tracker. Please check your inputs and try again.</h2>
        }

        if(this.state.graph === false) {

        }
        
        else if (this.state.graph === true) {
            thePlot = <Plot
            data={[
                {
                y: this.state.caloriesArr,
                x: this.state.xAxis,
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: 'red'},
                name: 'Calories'
              },
              {
                y: this.state.carbsArr,
                x: this.state.xAxis,
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: 'green'},
                name: 'Carbohydrates'
              },
              {
                y: this.state.fatArr,
                x: this.state.xAxis,
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: 'blue'},
                name: 'Fat'
              },
              {
                y: this.state.proteinArr,
                x: this.state.xAxis,
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: 'purple'},
                name: 'Protein'
              },
              {
                y: this.state.sodiumArr,
                x: this.state.xAxis,
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: 'orange'},
                name: 'Sodium'
              },
              {
                y: this.state.sugarArr,
                x: this.state.xAxis,
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: 'black'},
                name: 'Sugar'
              },
              
            ]}
            layout={ {xaxis:{autotick:false,ticklen:1},yaxis:{title:this.state.measure}, title:'Food Trckr'}}
          />
        }
        return(
            <div>
                <Nav />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center">
                        {errorMsg}
                        <h1>Food Trckr</h1>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-md-2 offset-md-1">
                    <Food value={this.state.food} onChange={this.handleInputChange} name="food"/>
                    <Calories value={this.state.calories} onChange={this.handleInputChange} name="calories"/>
                    <Carbs value={this.state.carbs} onChange={this.handleInputChange} name="carbs"/>
                    <Fat value={this.state.fat} onChange={this.handleInputChange} name="fat"/>
                    <Protein value={this.state.protein} onChange={this.handleInputChange} name="protein"/>
                    <Sodium value={this.state.sodium} onChange={this.handleInputChange} name="sodium"/>
                    <Sugar value={this.state.sugar} onChange={this.handleInputChange} name="sugar"/>
                    <button type="submit" className="btn btn-success" onClick={this.submitEntry}>Submit Entry</button>
                    </div>
                    <div className="col-md-9">
                    
                   
                    <button className="btn btn-success m-2" onClick={() => this.getGraph('calories')}>Calories</button>
                    <button className="btn btn-success m-2" onClick={() => this.getGraph('carbs')}>Carbohydrates</button>
                    <button className="btn btn-success m-2" onClick={() => this.getGraph('fat')}>Fats</button>
                    <button className="btn btn-success m-2" onClick={() => this.getGraph('protein')}>Protein</button>
                    <button className="btn btn-success m-2" onClick={() => this.getGraph('sugar')}>Sugar</button>
                    <button className="btn btn-success m-2" onClick={() => this.getGraph('sodium')}>Sodium</button>
                    <button className="btn btn-danger m-2" onClick={() => this.deleteData()}>Clear</button>

                    {thePlot}
                    
                </div></div>
                </div>
            </div>


        )
    }
       


}

export default FoodTrckrPage;