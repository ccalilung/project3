

import React from 'react'
import Nav from '../Nav/Nav'
import Blog from './Blog'
import API from '../utils/API'
import BlogsInput from '../search/BlogsInput'
import SearchBtn from '../search/SearchBtn'

class BlogPage extends React.Component {
state = {
title: '',
content:'',
blogs: []


}

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

findBlog = (event) => {
    event.preventDefault()

    API.findBlogs(this.state.search)
        .then(data => {
           let a = data;
           let b = [];
           
           for (let i=0;i<a.length;i++) {
                    b.push({title:a[i].title, body:a[i].body})
                    }
            this.setState({blogs:b}) 
            console.log(b)

})}

InsertBlog = (event) => {
    event.preventDefault()

    API.addBlogs(this.state.title,this.state.content)
        .then(data => {
           let a = data;
           let b = [];
           
           for (let i=0;i<a.length;i++) {
                    b.push({title:a[i].title, body:a[i].body})
                    }
            this.setState({blogs:b}) 
            console.log(b)

})}
    


    render() {
        return(
            <div>
            
            <Nav classHome="nav-item" classBlog="nav-item" classBlog="nav-item active"/>
            <div className="container">
            
            <BlogsInput value={this.state.search}
        onChange={this.handleInputChange}
        name="search" />
            <SearchBtn onClick={this.InsertBlog}>Add Blog</SearchBtn>
            <Blog Blogs={this.state.blogs}/>
            
                
                </div>
                </div>
        )
    }
};

export default BlogPage;