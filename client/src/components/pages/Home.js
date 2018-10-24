import React from 'react';
import Nav from '../Nav/Nav'
import Cards from '../Cards/Cards'
import '../images/images.css'


class Home extends React.Component {

    render() {
        return(
            <div>
                <Nav />
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <h1>Nutrition &amp; Recipe Application</h1>
                    </div>
                    </div>
                <div className="row cards">
                    <div className="col-md-3 homeCardOne">
                    
                    <Cards redirect="/nutritionfacts" text="Learn more about the foods being sold at the supermarket. This database has the ingredients of America's favorite foods as well as their nutritional values." src={require('../images/veggies.jpg')} title="Nutritional Facts"/>                    
                    
                    </div>
                    <div className="col-md-3 homeCardTwo">
                    
                    <Cards redirect="/blog" text="See what other users are talking about with regards to nutrition, or share your own recipe! This food blog is your one-stop-shop for all things food." src={require('../images/blog.jpg')} title="Food Blog"/>                    
                    
                    </div>
                    <div className="col-md-3 homeCardThree">
                    
                    <Cards redirect="/recipes" text="Looking to cook tonight? Feeling like you want to take on a challenge? Find a healthy recipe here." src={require('../images/recipes.jpg')} title="Recipe Finder"/>                    
                    
                    </div>

                    <div className="col-md-3 homeCardFour">
                    
                    <Cards redirect="/foodtrckr" text="Trying to bulk or lose weight? Track your nutritional intake here. You can visualize your progress with the built-in graph tool." src={require('../images/trckr.jpg')} title="FoodTrckr &copy;"/>                    
                    
                    </div>
                
                </div>




                </div>
            </div>
        )
    }
}



export default Home;