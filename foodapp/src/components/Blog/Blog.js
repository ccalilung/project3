import React from 'react';

const Blog = (props) => {

return(
<div>
    <h1>Blog Posts:</h1>
 {props.Blogs.map((x,i)=> (
     <div>
         <h4>Post #{i+1}: {x.title}</h4>
        <h6>{x.body}</h6>
        <hr/>
        </div>
      ))}
    </div>
)
 }
export default Blog;