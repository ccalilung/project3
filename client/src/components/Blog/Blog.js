import React from 'react';
import '../Blog/Blog.css'

const Blog = (props) => {

return(
<div className="blogCards">
    <h1>Blog Posts:</h1>
 {props.Blogs.map((x,i)=> (
     <div className="card-panel z-depth-3">
     <div class="card-image">
          <img className="cardImage" src={require("../images/blog.jpg")} />
          <span class="card-title"></span>
        </div>
         <h4 className="card-title">Post #{i+1}: {x.title}</h4>
        <h6 className="card-text">{x.body}</h6>
        <hr/>
        </div>
      ))}
    </div>
)
 }
export default Blog;