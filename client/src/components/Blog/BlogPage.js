

import React from 'react'
import Nav from '../Nav/Nav'
import Blog from './Blog'
import API from '../utils/API'
import BlogsInput from './BlogsInput'
import BlogTitle from './BlogTitle'
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
    

    API.findBlogs()
        .then(data => {
        this.setState({blogs:data.data})

})}

InsertBlog = (event) => {
    event.preventDefault()
    let blogPost = {
        title: this.state.title,
        content: this.state.content
    }
    API.addBlogs(blogPost)
        .then(data => {
           let a = data;
           let b = [];
           
           for (let i=0;i<a.length;i++) {
                    b.push({title:a[i].title, body:a[i].body})
                    }
            this.setState({blogs:b}) 
            console.log(b)

})}
    
componentDidMount(){
    this.findBlog()
}


    render() {
        return(
            <div>
            
            <Nav classHome="nav-item" classBlog="nav-item" classBlog="nav-item active"/>
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-7 offset-md-2">
                <Blog Blogs={this.state.blogs}/>
                </div>
                <div className="col-md-3">
                <h3>Create a blogpost</h3>
                <BlogTitle value={this.state.title} onChange={this.handleInputChange} name="title"/>
                <BlogsInput value={this.state.content} onChange={this.handleInputChange} name="content" />
                <SearchBtn onClick={this.InsertBlog}>Add Blog Post</SearchBtn>
                </div>
            </div>
           
            
            
                
                </div>
                </div>
        )
    }
};

export default BlogPage;