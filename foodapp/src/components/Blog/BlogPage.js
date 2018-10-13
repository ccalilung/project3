import React from 'react'
import Nav from '../Nav/Nav'
import Blog from './Blog'
class BlogPage extends React.Component {


    render() {
        return(
            <div>
                <Nav classHome="nav-item" classBlog="nav-item active" classRecipes="nav-item"/>
                <Blog />

            </div>


        )
    }



}

export default BlogPage