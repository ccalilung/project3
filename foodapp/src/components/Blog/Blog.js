import React from 'react';

const Blog = (props) => {

return(
<div>
 {props.Blogs.map(x => (
     <div>
         <div>{x.name}</div>
        <br/>
        </div>
      ))}
    </div>
)
 }
export default Blog;